<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-row",
  props: {
    // 默认的空隙
    gutter: {
      type: Number
    },
    align: {
      type: String,
      validator ( value ) {
        return ['left', 'right', 'center'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    rowStyle () {
      let { gutter } = this
      return {
        marginLeft: -gutter/2+'px',
        marginRight: -gutter/2+'px'
      }
    },
    rowClass () {
      let { align } = this
      return [align && `align-${align}`]
    }
  },
  mounted () {
    // 获取到row中的col
    this.$children.forEach((vm => {
      vm.gutter = this.gutter
    }))
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
