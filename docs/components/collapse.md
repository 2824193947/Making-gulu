---
title: Collapse
---

# Collapse

<ClientOnly>
  <collapse-demos-1></collapse-demos-1>
</ClientOnly>

```javascript
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
<style>
```

<ClientOnly>
  <collapse-demos-2></collapse-demos-2>
</ClientOnly>

```javascript
 <collapse :selected="[]" single>
<collapse-item title="标题1" name="test1">内容1</collapse-item>
<collapse-item title="标题2" name="test2">内容2</collapse-item>
<collapse-item title="标题3" name="test3">内容3</collapse-item>
<collapse-item title="标题4" name="test4">内容4</collapse-item>
</collapse>
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
<style>
```

<ClientOnly>
  <collapse-demos-3></collapse-demos-3>
</ClientOnly>

```javascript
<template>
  <collapse :selected="['test1']" single>
  <collapse-item title="标题1" name="test1">内容1</collapse-item>
  <collapse-item title="标题2" name="test2">内容2</collapse-item>
  <collapse-item title="标题3" name="test3">内容3</collapse-item>
  <collapse-item title="标题4" name="test4">内容4</collapse-item>
</collapse>
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
<style>
```
