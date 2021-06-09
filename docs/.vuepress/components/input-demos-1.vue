<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
    <hr>
    <g-input value="中文" error="输入信息有误"></g-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import GInput from '../../../src/input'
export default {
  components: {GInput},
  data () {
    return {
      selected: '1',
      content:
          `
<g-input></g-input>
<g-input value="中文"></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" readonly></g-input>
<g-input value="中文" error="输入信息有误"></g-input>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
