<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 50px;">
      <slot></slot>
    </div>
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
      let { span, offset } = this
      return [span && `col-${span}`, offset && `offset-${offset}`]

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
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String]
    },
  }
}
</script>

<style lang="scss" scoped>
.col {
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
