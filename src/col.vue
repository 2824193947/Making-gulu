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
    narrowPc: {
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
  methods: {
    createdClass (spanAndOffset, device = '') {
      if (!spanAndOffset) {return []}
      let arr = []
      if (spanAndOffset.span) {
        arr.push(`col-${device}${spanAndOffset.span}`)
      }
      if (spanAndOffset.offset) {
        arr.push(`offset-${device}${spanAndOffset.offset}`)
      }
      return arr
    }
  },
  computed: {
    colClass () {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      const createdClass = this.createdClass
      return [
        ...createdClass({span, offset}),
        ...createdClass(ipad,'ipad-'),
        ...createdClass(narrowPc,'narrowPc-'),
        ...createdClass(pc,'pc-'),
        ...createdClass(widePc,'widePc-')
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
  @media (min-width: 576px) {
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
  @media (min-width: 768px) {
    $class: col-narrowPc-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-narrowPc-pc-;
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
  @media (min-width: 1200px) {
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
