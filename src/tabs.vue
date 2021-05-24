<template>
<div class="tabs">
  <slot></slot>
  <slot name="actions"></slot>
</div>
</template>

<script>
export default {
  name: "g-tabs",
  props: {
    // 当前的tab
    selected: {
      type: String,
      require: true
    },
    // 方向
    direction: {
      type: String,
      validator (value) {
        return ['level', 'vertical'].indexOf(value) > -1
      }
    }
  },
  created () {
    this.$emit('update:selected', this.selected)
  }
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>
