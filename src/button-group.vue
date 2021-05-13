<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-button-group",
  mounted () {
    for (let node of this.$el.children ) {
      let name = node.nodeName.toLowerCase()
      if ( name !== 'button')
      console.warn(`g-button-group 的子元素应该全是 g-button, 但是你写的是${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:last-child {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
    &:hover {
      position: relative; z-index: 1;
    }
  }
}
</style>
