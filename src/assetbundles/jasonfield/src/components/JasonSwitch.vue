<template>
  <div>
    <div
      class="lightswitch"
      :class="{ on: active }"
      tabindex="0"
      :id="id"
      :aria-labelledby="id"
      role="checkbox"
      aria-checked="true"
      @click="toggle()"
    >
      <div class="transition-all duration-150 lightswitch-container">
        <div class="label on"></div>
        <div class="!bg-white handle"></div>
        <div class="label off"></div>
      </div>
      <input type="hidden" :name="name" v-model="active" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'value'],
  beforeMount() {
    this.active = this.value
  },
  mounted() {
    this.$emit('toggled', this.active)
  },
  data() {
    return {
      active: true,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
      this.$emit('toggled', this.active)
    },
  },
}
</script>
