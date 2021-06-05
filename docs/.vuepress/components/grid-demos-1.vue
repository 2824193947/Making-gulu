<template>
  <div style="padding-top: 16px;">
    <h2>基础布局</h2>
    <div>
      使用单一分栏创建基础的栅格布局</div>
    <p>
      <strong>预览</strong>
    </p>
    <g-row class="demoRow">
      <g-col span="12" class="demoCol">
        <div class="grid-content"></div>
      </g-col>
      <g-col span="12" class="demoCol">
        <div class="grid-content"></div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="8" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="8" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="8" class="demoCol"><div class="grid-content"></div></g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
      <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
    </g-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Col from "../../../src/grid/col"
import Row from "../../../src/grid/row";

export default {
  name: "grid-demo",
  components: {
    'g-col': Col,
    'g-row': Row
  },
  data () {
    return {
      content:
          `
<g-row class="demoRow">
  <g-col span="12" class="demoCol">
    <div class="grid-content"></div>
  </g-col>
  <g-col span="12" class="demoCol">
    <div class="grid-content"></div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="6" class="demoCol"><div class="grid-content"></div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="8" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="8" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="8" class="demoCol"><div class="grid-content"></div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
  <g-col span="3" class="demoCol"><div class="grid-content"></div></g-col>
</g-row>

<style>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.grid-content {
  background: #eee;
  border: 1px solid #ccc;
  min-height: 36px;
  border-radius: 4px;
}
</style>
      `.replace(/^ {8}/gm, '').trim()
    }
  }

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.grid-content {
  background: #eee;
  border: 1px solid #ccc;
  min-height: 36px;
  border-radius: 4px;
}
</style>
