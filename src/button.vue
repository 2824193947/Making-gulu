<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // 图标 图标位置
  props: ['icon', 'iconPosition']
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--boeder-color-hover);
  }

  &:active {
    background-color: var(--button-active-bgc);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
    margin-left: 0;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
</style>
