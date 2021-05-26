<template>
<div class="tabs-item" @click="Onclick" :class="classes">
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
    disabled: {
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
        active: this.actives,
        disabled: this.disabled
      }
    }
  },
  created() {
    // 事件中心eventBus监听事件
    this.eventBus.$on('update:selected', (name) => {
      this.actives = name === this.name;
    })
  },
  methods: {
    Onclick () {
      if (this.disabled) return
      // eventBus触发事件  传参数 (当前的item名字, 当前item组件对象)
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
$on-color: #3498db;
$color: #666;

.tabs-item {
  padding: 0 1em;
  height: 100%;
  line-height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: $color;
  font-weight: bold;
  &.active {
    color: $on-color;
  }
  &.tabs-item:hover {
    color: $on-color;
  }
  &.disabled {
    color: #bbb;
    cursor: not-allowed;
    &.tabs-item:hover {
      color: #bbb;
    }
  }
}
</style>
