<template>
<div class="tabs-header">
  <slot></slot>
  <div class="line-wrapper">
    <div class="line" ref="lineRef"></div>
  </div>
  <div class="actions-wrapper">
    <slot name="actions"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "tabs-head",
  inject: ['eventBus'],
  mounted () {
    this.eventBus.$on('update:selected', (itemName, vm) =>{
      this.$nextTick(() => {
        let {width, left} = vm.$el.getBoundingClientRect()
        this.$refs.lineRef.style.width = `${width}px`
        this.$refs.lineRef.style.left = `${left}px`
      })
    })
  },
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;

.tabs-header {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  > .line-wrapper {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: var(--button-active-bgc);
    .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid #3498db;
      transition: all 350ms;
    }
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
