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
        this.actives = name === this.name;
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
