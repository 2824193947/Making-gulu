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
      this.actives = name === this.name;
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
$color: blue;

.tabs-item {
  padding: 0 1em;
  height: 100%;
  line-height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $color;
    font-weight: bold;
  }
}
</style>
