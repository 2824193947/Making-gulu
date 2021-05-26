<template>
<div class="tabs-header">
  <slot></slot>
  <div class="line" ref="lineRef"></div>
  <div class="actions-wrapper">
    <slot name="actions"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "tabs-head"
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;

.tabs-header {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  > .line {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #666666;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
