<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "g-collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data () {
    return {
      eventBus: new Vue
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.selected && this.eventBus.$emit('update:selected', this.selected)

    let selectedCopy
    this.eventBus.$on('update:addSelected', (name) => {
      // 深拷贝props, 因为要修改他的值
      if (!selectedCopy) {
        selectedCopy = JSON.parse(JSON.stringify(this.selected));
      }
      if (this.single === true) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      // 实现传入是变量时, 需要是响应式的, 所以派发事件, props变为响应式
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })

    this.eventBus.$on('update:removeSelected', (name) => {
      if (!selectedCopy) {
        selectedCopy = JSON.parse(JSON.stringify(this.selected));
      }
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      // 实现传入是变量时, 需要是响应式的, 所以派发事件, props变为响应式
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })
    this.$children.forEach((vm) => {
      vm.single = this.single
    })
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
