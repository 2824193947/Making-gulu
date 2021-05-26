<template>
<div class="tabs-item" @click="xxx" :class="classes">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "tabs-item",
  inject: ['eventBus'],
  data () {
    return {
      actives: false
    }
  },
  props: {
    disabledButton: {
      type: Boolean,
      default: false
    },
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
  created() {
    this.eventBus.$on('update:selected', (name) => {
      if (name === this.name) {
        this.actives = true
      } else {
        this.actives = false
      }
    })
  },
  methods: {
    xxx () {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  &.active {
    background: pink;
  }
}
</style>
