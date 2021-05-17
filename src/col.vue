<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-col",
  data () {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass () {
      // return [span && `col-${span}`, offset && `offset-${offset}`]
      // 因为span会识别为变量两个方法解决
      return '[span && `col-${span}`, offset && `offset-${offset}`]'
      // 或者声明这两个变量 let span, offset = this

    },
    colStyle () {
      return {
        paddingLeft: this.gutter/2+'px',
        paddingRight: this.gutter/2+'px'
      }
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  }
}
</script>

<style lang="scss" scoped>
.col {
  width: 50%;

  // scss循环语句
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
