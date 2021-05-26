<template>
<div class="tabs">
  <slot></slot>
</div>
</template>

<script>
import Vue from "vue";

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
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.eventBus.$emit('update:selected', this.selected)
  },
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>
