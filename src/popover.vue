<template>
  <div class="popover" @click="Onclick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="trigger">
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
  methods: {
    // 1.内容定位
    positionContent() {
      // 1.将弹出框添加到body
      document.body.appendChild(this.$refs.contentWrapper)
      // 2.获取trigger信息, 给弹出popover定位
      let {left, top} = this.$refs.trigger.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
    },
    onClickDocument (e) {
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
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
      }, 10)
    },
    close () {
      this.visible = false
      // console.log('删除事件')
      document.removeEventListener('click', this.onClickDocument)
      // console.log('关闭')
    },
    Onclick(e) {
      if (this.$refs.trigger.contains(e.target)) {
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
  transform: translateY(-100%);
  padding: 0.5em 1em;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  // 解决小三角没有阴影
  filter: drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.5));
  background: white;

  &::before, &::after {
    position: absolute;
    left: 10px;
    content: '';
    border: 10px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 100%;
    border-top: 10px solid $border-color;
  }

  &::after {
    top: calc(100% - 1px);
    border-top: 9px solid white;
  }
}

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
</style>
