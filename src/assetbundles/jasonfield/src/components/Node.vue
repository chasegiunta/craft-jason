<template>
  <tr class="w-full">
    <td class="bg-grey-lighter text-grey-darker px-8px">
      {{ nodekey }}
    </td>

    <td class="" v-if="isObject(nodevalue)">
      <table class="w-full">
        <node
          v-for="(value, key, index) in nodevalue"
          :key="index"
          :index="index"
          :nodevalue="value"
          :nodekey="key"
          :reference="`${reference ? reference + '.' : ''}${key}`"
          @valuechange="emitValueChange($event.reference, $event.value)"
        >
        </node>
      </table>
    </td>
    <td v-else-if="reference.length > 0">
      <textarea
        ref="textarea"
        class="block w-full outline-none resize-none focus:shadow-outline px-8px py-5px leading-normal"
        :value="nodevalue"
        @input="emitValueChange(reference, $event.target.value)"
        autocomplete="disabled"
        rows="1"
      />
    </td>
  </tr>
</template>

<script>
import autosize from 'autosize'

export default {
  name: 'node',
  props: ['index', 'nodevalue', 'nodekey', 'reference'],
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
  },
}
</script>

<style lang="scss" scoped>
td {
  @apply border border-solid border-grey;

  td {
    border-left: 0 !important;
  }

  tr:first-child {
    td:first-child {
      border-top: 0;
    }
    td:last-child {
      border-right: 0;
      border-top: 0;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom: 0;
    }
    td:last-child {
      border-bottom: 0;
    }
  }
}
</style>
