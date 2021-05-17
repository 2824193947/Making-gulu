<template>
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{'error': error}"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'

export default {
  name: "g-input",
  components: {
    'icon': Icon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 14px;
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;

  * {
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }
  }

  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }

    &.error {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: $red;
  }
}
</style>
