<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  /*按钮样式*/
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em; /*按钮左右一个字的宽度*/
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--boeder-color-hover);
    }
    &:active {
      background-color: var(--button-active-bgc);
    }
    &:focus {
      outline: none;
    }
  }
</style>
