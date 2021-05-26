<template>
<div class="tabs-header">
  <slot></slot>
  <div class="actions-wrapper">
    <slot name="actions"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "tabs-header"
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;

.tabs-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: $tab-height;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
