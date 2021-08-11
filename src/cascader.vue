<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover" v-for="item in source">
      <g-cascaderItem :sourceItem="item"></g-cascaderItem>
    </div>
  </div>
</template>


<script>
import CascaderItem from './cascader-item'

export default {
  name: "g-cascader",
  components: {
    'g-cascaderItem': CascaderItem
  },
  props: {
    source: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
@import "common/css/var";

.cascader{
}
</style>

