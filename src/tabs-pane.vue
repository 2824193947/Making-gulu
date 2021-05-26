<template>
<div class="tabs-pane" :class="classes" v-if="actives">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "tabs-pane",
  inject: ['eventBus'],
  data () {
    return {
      actives: false,
    }
  },
  props: {
    name: {
      type: [String, Number],
      require: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.actives
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          this.actives = true
        } else {
          this.actives = false
        }
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: greenyellow;
  }
}
</style>
