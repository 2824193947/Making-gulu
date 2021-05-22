<template>
    <div class="wrapper" :class="toastClass">
      <div class="toast" ref="toastRef">
        <div class="message">
          <slot v-if="!enableHtml"></slot>
          <div v-html="$slots.default" v-else></div>
        </div>
        <div class="line" ref="line"></div>
        <div v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "g-toast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 2,
      validator(value) {
        return value === false || typeof value === 'number';
      }
    },
    closeButton: {
      type: Object,
      default () {
        return { text: '关闭', callback: undefined }
      }
    },
    // 是否支持携带html的字符串(为了学习,扩展的功能)
    enableHtml: {
      type: Boolean
    },
    // 位置
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  mounted () {
    this.executeAutoClose()
    this.updateStyle()
  },
  computed: {
    toastClass () {
      return `position-${this.position}`
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() =>{
        this.$refs.line.style.height = `${this.$refs.toastRef.getBoundingClientRect().height}px`
      })
    },
    // 自动关闭
    executeAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        },this.autoClose*1000)
      }
    },
    // 打扫战场
    close () {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    // 点击关闭
    onClickClose () {
      this.close()
      // 有回调调用回调
      if (this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 35px;
$bg-color: rgba(0,0,0,0.74);
$animation-duration: 0.5s;
@keyframes fade-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-middle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: fade-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: fade-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-middle $animation-duration;
  }

  .toast {
    display: flex;
    align-items: center;
    padding: 0 16px;
    min-height: $toast-height;
    line-height: 1.8;
    background: $bg-color;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    font-size: $font-size;
    color: white;
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      color: #bbbbbb;
      cursor: pointer;
    }
    .message {
      padding: 4px 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      flex-shrink: 0;
      margin-left: 32px;
    }
  }
}
</style>
