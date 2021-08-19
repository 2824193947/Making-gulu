<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <g-cascaderItems :Items="source"></g-cascaderItems>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items'

export default {
  name: "g-cascader",
  components: {
    'g-cascaderItems': CascaderItems
  },
  data() {
    return {
      popoverVisible: false
    }
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

.cascader {
  position: relative;
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover {
    border: 2px solid green;
    height: 200px;
  }
}
</style>

