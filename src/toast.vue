<template>
    <div class="toast" ref="toast" :class="toastClass">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-html="$slots.default" v-else></div>
      </div>
      <div class="line" ref="line"></div>
      <div v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</div>
    </div>
</template>

<script>
export default {
  name: "g-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: false
    },
    autoDelay: {
      type: Number,
      default: 1.5
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
    this.updateStyle()
    this.executeAutoClose()
  },
  computed: {
    toastClass () {
      return `position-${this.position}`
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() =>{
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    // 自动关闭
    executeAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        },this.autoDelay*1000)
      }
    },
    // 打扫战场
    close () {
      this.$el.remove()
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

.toast {
  position: fixed;
  left: 50%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  min-height: $toast-height;
  line-height: 1.8;
  background: $bg-color;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
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
  &.position-top {
    top: 5px;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 5px;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
