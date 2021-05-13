<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "button-group"
}
</script>

<style lang="scss" scoped>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
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
