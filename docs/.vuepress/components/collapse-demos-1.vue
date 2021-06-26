<template>
  <div style="padding-top: 16px;">
    <h2>基础布局</h2>
    <div>
      默认状态</div>
    <p>
      <strong>预览</strong>
    </p>
    <collapse :selected="[]">
      <collapse-item title="标题1" name="test1">内容1</collapse-item>
      <collapse-item title="标题2" name="test2">内容2</collapse-item>
      <collapse-item title="标题3" name="test3">内容3</collapse-item>
      <collapse-item title="标题4" name="test4">内容4</collapse-item>
    </collapse>
  </div>
</template>

<script>
import CollapseItem from '../../../src/collapse/collapse-item'
import Collapse from '../../../src/collapse/collapse'

export default {
  name: "collapse-demos-2",
  components: {
    CollapseItem,
    Collapse
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.wrapper1 {
  margin-bottom: 10px;
}
</style>


