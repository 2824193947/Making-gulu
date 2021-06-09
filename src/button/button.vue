<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon
        :name="icon"
        class="icon"
        v-if="icon && !loading"
    >
    </g-icon>
    <g-icon
        name="loading"
        class="loading icon"
        v-if="loading"
    >
    </g-icon>
    <div class="wrapper">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon'

export default {
  components: {
    'g-icon': Icon
  },
  name: "g-button",
  // 图标 图标位置
  props: {
    icon: {},
    // loading状态
    loading:{
      type: Boolean,
      default: false
    },
    // icon位置
    iconPosition: {
      type: String,
      default: 'left',
      // 监听iconPosition的值, 防止用户乱填
      validator (value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bgc: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*按钮样式*/
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em; /*按钮左右一个字的宽度*/
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bgc;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
    margin-left: 0;
  }
  > .wrapper {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
    > .wrapper {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
