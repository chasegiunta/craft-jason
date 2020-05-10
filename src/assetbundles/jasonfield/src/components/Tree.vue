<template>
  <div class="">
    <div v-show="!showRaw" class="w-full rounded">
      <div
        @click.prevent="initField"
        v-if="fieldEmpty && !readonly"
        class="w-full text-2xl btn"
      >
        +
      </div>
      <div v-else-if="fieldEmpty && readonly" class="text-gray-700">
        No value entered for this <i>readonly</i> Jason (JSON) field.
      </div>
      <table class="w-full" v-if="error === null">
        <node
          v-for="(value, key, index) in fieldValue"
          :key="index"
          :index="index"
          :nodevalue="value"
          :nodekey="key"
          :readonly="readonly"
          :reference="`${key}`"
          @valuechange="addToData($event)"
          @keychange="replaceKey($event)"
        >
        </node>
      </table>
    </div>

    <div v-show="showRaw" class="highlight">
      <pre class="!m-0 line-numbers"><code 
              :id="`${namespacedId}-textarea`"
              class="font-mono !text-sm language-json"
              :class="[jsonString.length == 0 ? 'empty' : '', { 'border-red-200 focus:border-red-200': error }]"></code></pre>
    </div>

    <textarea
      class="absolute invisible"
      :name="name"
      rows="2"
      v-model="jsonString"
    >
    </textarea>

    <div class="flex items-start">
      <ul v-show="error" class="!mt-3 errors">
        <li>{{ error }}</li>
      </ul>

      <div v-if="allowRawEditing && !readonly" class="mt-3 ml-auto">
        <div class="btn" tabindex="0" @click.prevent="showRaw = !showRaw">
          {{ showRaw ? 'Done Editing' : 'Edit Raw Data' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { vueSet } from 'vue-deepset'
import autosize from 'autosize'
import Prism from 'prismjs'
import { CodeJar } from 'codejar'

export default {
  props: {
    value: {},
    name: {
      type: String,
    },
    namespacedId: {
      type: String,
    },
    validOnLoad: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    allowRawEditing: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.isValid = this.validOnLoad
    if (!this.validOnLoad && !this.readonly && this.allowRawEditing)
      this.showRaw = true
    if (Array.isArray(this.value) && this.value.length == 0) {
      this.fieldValue = ''
    } else {
      this.fieldValue = this.value
    }
    // autosize(this.$refs.textarea)
    this.initJar()
  },
  watch: {
    jsonString: function(newValue) {
      if (this.jsonString.length === 0) {
        this.fieldValue = ''
      } else {
        this.parse(newValue)
      }
    },
    showRaw: function(newValue) {
      if (newValue == true) {
        this.$nextTick(function() {
          this.jar.updateCode(this.jsonString)
          // autosize.update(this.$refs.textarea)
        })
      }
    },
  },
  computed: {
    fieldEmpty() {
      return (
        this.fieldValue.length === 0 || !Object.keys(this.fieldValue).length
      )
    },
    jsonString: {
      get() {
        if (this.error === null && this.isValid === true) {
          const stringified = JSON.stringify(this.fieldValue, null, 1)
          if (stringified == '""') {
            /*
              If JSON.stringify is going to return "",
              let's just leave the field blank.
            */
            return ''
          } else {
            return stringified
          }
        } else {
          return this.fieldValue
        }
      },
      set(newValue) {
        this.parse(newValue)
      },
    },
  },
  data() {
    return {
      fieldValue: {},
      showRaw: false,
      error: null,
      isValid: true,
      jar: null,
    }
  },
  methods: {
    initField() {
      this.fieldValue = '[0]'
    },
    initJar() {
      this.jar = new CodeJar(
        document.querySelector(`#${this.namespacedId}-textarea`),
        Prism.highlightElement,
      )
      this.jar.updateCode(this.jsonString)
      this.jar.onUpdate(code => {
        this.jsonString = code
      })
    },
    addToData(event) {
      vueSet(this.fieldValue, event.reference, event.value.trim())
    },
    parse(value) {
      try {
        this.fieldValue = JSON.parse(value)
        this.error = null
        this.isValid = true
      } catch (error) {
        this.error = error.message
        this.fieldValue = value
        return
      }
    },
  },
}
</script>

<style>
@import 'prismjs/themes/prism-coy.css';
@import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
</style>

<style scoped>
.empty::after {
  content: 'Field is blank. Enter valid JSON.';
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 53px;
  color: theme('colors.gray.600');
}
</style>
