<template>
  <tr class="w-full">
    <td class="px-3 py-2 text-gray-700 bg-gray-200">
      {{ nodekey }}
    </td>

    <td class="!p-0" v-if="isObject(nodevalue)">
      <table class="w-full">
        <node
          v-for="(value, key, index) in nodevalue"
          :key="index"
          :index="index"
          :nodevalue="value"
          :nodekey="key"
          :readonly="readonly"
          :reference="`${reference ? reference + '.' : ''}${key}`"
          @valuechange="emitValueChange($event.reference, $event.value)"
          :child="true"
        >
        </node>
      </table>
    </td>
    <td class="!p-0" v-else-if="reference.length > 0">
      <textarea
        ref="textarea"
        class="box-border block w-full h-auto px-3 py-2 leading-normal border-0 outline-none resize-none focus:shadow-outline"
        :value="nodevalue"
        @input="emitValueChange(reference, $event.target.value)"
        autocomplete="disabled"
        rows="1"
        :readonly="readonly"
      />
    </td>
  </tr>
</template>

<script>
import autosize from 'autosize'

export default {
  name: 'node',
  props: ['index', 'nodevalue', 'nodekey', 'reference', 'readonly', 'child'],
  data() {
    return {
      nodeactive: false,
      nodeinputvalue: '',
    }
  },
  methods: {
    isObject(value) {
      return typeof value === 'object' && value !== null
    },
    emitValueChange(key, value = '') {
      this.$emit('valuechange', {
        value: value,
        reference: key,
      })
    },
  },
  mounted() {
    autosize(this.$refs.textarea)

    var replaceState = history.replaceState
    var self = this
    history.replaceState = function() {
      replaceState.apply(history, arguments)
      autosize.update(self.$refs.textarea)
    }
  },
}
</script>

<style lang="postcss" scoped>
table {
  border: solid 0.4px theme('colors.gray.500');
  & table {
    border: 0;
  }
}
td,
textarea {
  box-shadow: inset 0px 0px 0px 0.4px theme('colors.gray.500');
}
</style>
