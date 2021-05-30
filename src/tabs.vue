<template>
  <div class="tabs" :class="direction">
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
      default: 'level',
      validator(value) {
        return ['level', 'vertical'].indexOf(value) > -1
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  methods: {
    checkChild() {
      if (this.$children.length === 0) {
        console && console.warn && console.warn('tabs的组件应该是"tab-head"和"tabs-body", 但是你没有写子组件')
      }
    },
    selectedTab() {
      // 找出当前名字的vm(元素对象)
      this.$children.forEach(vm => {
        if (vm.$options.name === 'tabs-head') {
          vm.$children.forEach(vmChild => {
            if (vmChild.$options.name === 'tabs-item' && vmChild.$props.name === this.selected) {
              // 传参 (当前选中的item的名字, 当前名字的vm)
              this.eventBus.$emit('update:selected', this.selected, vmChild)
            }
          })
        }
      })
    }
  },
  mounted() {
    this.checkChild()
    this.selectedTab()
  },
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>
