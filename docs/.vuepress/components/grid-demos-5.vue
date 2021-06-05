<template>
  <div style="padding-top: 16px;">
    <h2>响应式布局</h2>
    <div>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：ipad、narrowPc、pc、widePc, <strong>如果设置响应式, 默认是手机的宽度</strong></div>
    <p>
      <strong>预览</strong>
    </p>
    <g-row class="demoRow">
      <g-col span="2" :ipad="{span: '6'}" :pc="{span: '6'}" class="demoCol">
        <div class="grid-content"></div>
      </g-col>
      <g-col span="8" :ipad="{span: '6'}" :pc="{span: '4', offset: '2'}" class="demoCol">
        <div class="grid-content"></div>
      </g-col>
      <g-col span="4" :ipad="{span: '6'}" :pc="{span: '4', offset: '2'}" class="demoCol">
        <div class="grid-content"></div>
      </g-col>
      <g-col span="8" :ipad="{span: '6'}" :pc="{span: '4', offset: '2'}" class="demoCol">
        <div class="grid-content"></div>
      </g-col>
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
  <g-col span="2" :ipad="{span: '6'}" :pc="{span: '6'}" class="demoCol">
    <div class="grid-content"></div>
  </g-col>
  <g-col span="8" :ipad="{span: '6'}" :pc="{span: '4', offset: '2'}" class="demoCol">
    <div class="grid-content"></div>
  </g-col>
  <g-col span="4" :ipad="{span: '6'}" :pc="{span: '4', offset: '2'}" class="demoCol">
    <div class="grid-content"></div>
  </g-col>
  <g-col span="8" :ipad="{span: '6'}" :pc="{span: '4', offset: '2'}" class="demoCol">
    <div class="grid-content"></div>
  </g-col>
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
