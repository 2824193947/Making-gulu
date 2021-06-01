<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-collapse-item",
  inject: ['eventBus'],
  props: {
    title: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  mounted () {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      if (names.indexOf(this.name) > -1) {
        this.show()
      } else {
        this.close()
      }
    })
  },
  methods: {
    toggle () {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
    close () {
      this.open = false
    },
    show () {
      this.open = true
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    padding-left: 8px;
    display: flex;
    align-items: center;
    background: lighten($grey, 8%);
  }
  &:first-child{
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
