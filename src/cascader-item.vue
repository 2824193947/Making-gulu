<template>
  <div class="CascaderItem">
    {{sourceItem.name}}
    <g-cascaderItem
       v-for="item in sourceItem.children"
       v-if="sourceItem.children"
       :sourceItem="item"
    ></g-cascaderItem>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'

export default {
  name: "g-cascaderItem",
  components: {
    'g-cascaderItem': CascaderItem
  },
  props: {
    sourceItem: {
      type: Object
    }
  },
  mounted() {
    console.log(this.sourceItem)
  }
}
</script>

<style scoped>

</style>
