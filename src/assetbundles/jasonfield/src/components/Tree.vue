<template>
  <div class="">
    <div v-show="!showRaw" class="rounded w-full">
      <button
        @click.prevent="initField"
        v-if="fieldEmpty && !readonly"
        class="w-full font-bold bg-grey-lighter text-grey-darker border border-grey px-5px py-3px text-xl flex items-center justify-center leading-none hover:border-blue"
      >
        +
      </button>
      <div v-else-if="fieldEmpty && readonly" class="text-grey-dark">
        No value entered for this <i>readonly</i> Jason (JSON) field.
      </div>
      <table class="w-full" v-if="error === null">
        <node
          v-for="(value, key, index) in fieldValue"
          :key="index"
          :index="index"
          :nodevalue="value"
          :nodekey="key"
          :reference="`${key}`"
          @valuechange="addToData($event)"
          @keychange="replaceKey($event)"
        >
        </node>
      </table>
    </div>
    <textarea
      ref="textarea"
      :id="namespacedId"
      :name="name"
      :class="{ 'border-red-light focus:border-red-light': error }"
      class="text fullwidth font-mono"
      rows="2"
      placeholder="Field is blank. Enter valid JSON."
      v-model="jsonString"
      v-show="showRaw"
    >
    </textarea>

    <div class="flex">
      <ul v-show="error" class="errors">
        <li>{{ error }}</li>
      </ul>

      <div v-if="allowRawEditing && !readonly" class="ml-auto py-10px">
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
    autosize(this.$refs.textarea)
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
          autosize.update(this.$refs.textarea)
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
    }
  },
  methods: {
    initField() {
      // this.fieldValue = '{ " ": " " }'
      this.fieldValue = '[0]'
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
