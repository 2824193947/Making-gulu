<template>
  <div class="popover" ref="popoverRef">
    <div ref="contentWrapperRef" class="content-wrapper" :class="`position-${position}`" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerRef">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-popover",
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) > -1
      }
    }
  },
  mounted () {
    if (this.trigger === 'click') {
      this.$refs.popoverRef.addEventListener('click', this.onClick)
    } else {
      this.$refs.popoverRef.addEventListener('mouseenter', this.open)
      this.$refs.popoverRef.addEventListener('mouseleave', this.close)
    }
  },
  destroyed () {
    if (this.trigger === 'click') {
      this.$refs.popoverRef.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popoverRef.removeEventListener('mouseenter', this.open)
      this.$refs.popoverRef.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    // 1.内容定位
    positionContent () {
      // 1.将弹出框添加到body
      document.body.appendChild(this.$refs.contentWrapperRef)
      const { contentWrapperRef, triggerRef } = this.$refs
      const {height: height2} = this.$refs.contentWrapperRef.getBoundingClientRect()
      const {left, top, height, width} = triggerRef.getBoundingClientRect()
      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: {
          left: left + window.scrollX,
          top: top + (height - height2) / 2 + window.scrollY
        },
        right: {
          left: left + width + window.scrollX,
          top: top + (height - height2) / 2 + window.scrollY
        }
      }
      contentWrapperRef.style.left = positions[this.position].left + 'px'
      contentWrapperRef.style.top = positions[this.position].top + 'px'
    },
    onClickDocument (e) {
      if (this.$refs.contentWrapperRef && (this.$refs.contentWrapperRef === e.target || this.$refs.contentWrapperRef.contains(e.target))) {
        return
      }
      this.close()
    },
    open () {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        // console.log('创建事件')
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      // console.log('删除事件')
      document.removeEventListener('click', this.onClickDocument)
      // console.log('关闭')
    },
    onClick (e) {
      if (this.$refs.triggerRef.contains(e.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.content-wrapper {
  position: absolute;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  // 解决小三角没有阴影
  filter: drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.5));
  background: white;
  &.position-top{
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      position: absolute;
      left: 10px;
      content: '';
      border: 10px solid transparent;
      width: 0;
      height: 0;
    }

    &::before {
      top: calc(100% + 1px);
      border-top: 10px solid $border-color;
    }

    &::after {
      top: 100%;
      border-top: 10px solid white;
    }
  }
  &.position-bottom{
    margin-top: 10px;
    &::before, &::after {
      position: absolute;
      left: 10px;
      content: '';
      border: 10px solid transparent;
      width: 0;
      height: 0;
    }

    &::before {
      bottom: calc(100% + 1px);
      border-bottom: 10px solid $border-color;
    }

    &::after {
      bottom: 100% ;
      border-bottom: 10px solid white;
    }
  }
  &.position-left{
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      border: 10px solid transparent;
    }

    &::before {
      left: calc(100% + 1px);
      border-left: 10px solid $border-color;
    }

    &::after {
      border-left: 10px solid white;
    }
  }
  &.position-right{
    margin-left: 10px;
    &::before, &::after {
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      border: 10px solid transparent;
    }

    &::before {
      right: calc(100% + 1px);
      border-right: 10px solid $border-color;
    }

    &::after {
      border-right: 10px solid white;
    }
  }
}

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
</style>
