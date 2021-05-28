<template>
  <div class="popover" @click.stop="xxx">
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
  data () {
    return {
      visible: false
    }
  },
  methods: {
    xxx () {
      this.visible = !this.visible
      if (this.visible === true) {
        setTimeout(() => {
          // 1.将弹出框添加到body
          document.body.appendChild(this.$refs.contentWrapper)
          // 2.获取trigger信息, 给弹出popover定位
          let {left, top} =this.$refs.trigger.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = `${left+window.scrollX}px`
          this.$refs.contentWrapper.style.top = `${top+window.scrollY}px`
          let eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          // 3.创建一个监听事件
          document.addEventListener('click', eventHandler)
        },10)
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
