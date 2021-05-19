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
  props: {
    span: {
      type: [Number, String],
    default: 24
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator ( value ) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
          if (!['span', 'offset'].includes(key)) {
            valid = false
          }
        })
        return valid
      }
    },
    ipad: {
      type: Object,
      validator ( value ) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
          if (!['span', 'offset'].includes(key)) {
            valid = false
          }
        })
        return valid
      }
    },
    pc: {
      type: Object,
      validator ( value ) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
          if (!['span', 'offset'].includes(key)) {
            valid = false
          }
        })
        return valid
      }
    },
    pc: {
      type: Object,
      validator ( value ) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
          if (!['span', 'offset'].includes(key)) {
            valid = false
          }
        })
        return valid
      }
    },
    widePc: {
      type: Object,
      validator ( value ) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
          if (!['span', 'offset'].includes(key)) {
            valid = false
          }
        })
        return valid
      }
    }
  },
  computed: {
    colClass () {
      let {span, offset, phone, ipad, pc, widePc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`col-phone-${phone.span}`, `offset-phone-${phone.offset}`] : []),
        ...(ipad ? [`col-ipad-${ipad.span}`, `offset-ipad-${ipad.offset}`] : []),
        ...(pc ? [`col-pc-${pc.span}`, `offset-pc-${pc.offset}`] : []),
        ...(widePc ? [`col-wide-pc-${widePc.span}`, `offset-widePc-${widePc.offset}`] : [])
      ]
    },
    colStyle () {
      return {
        paddingLeft: this.gutter/2+'px',
        paddingRight: this.gutter/2+'px'
      }
    }
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
  @media (min-width: 577px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
