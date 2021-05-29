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
      // 判断 popover存在 && 点击的是popover && 点击的是 popover 内部
      if (this.$refs.contentWrapper.contains(e.target)) { return }
      this.close()
    },
    open () {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        console.log('创建事件')
        document.addEventListener('click', this.onClickDocument)
      }, 10)
    },
    close () {
      this.visible = false
      console.log('删除事件')
      document.removeEventListener('click', this.onClickDocument)
      console.log('关闭')
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
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
