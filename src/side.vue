<template>
  <transition name="slide">
    <div class="side" v-show="visible">
        <slot></slot>
        <button @click="close">关闭</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "g-side",
  data () {
    return {
      visible: true
    }
  },
  methods: {
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  position: relative;
  > button {
    position: absolute;
    top: 1px;
    left: 169px;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to {
  margin-left: -200px;
}

</style>
