<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import GLayout from '../../../src/layout/layout'
import GHeader from '../../../src/layout/header'
import GFooter from '../../../src/layout/footer'
import GContent from '../../../src/layout/content'
import GSide from '../../../src/layout/side'
export default {
  name: 'layout-demos-1',
  components: {GLayout, GHeader, GFooter, GContent, GSide},
  data () {
    return {
      content: `
          <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
              header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
              content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
              footer
            </g-footer>
          </g-layout>
// 需要全局添加border-box
<style scoped>
* {
  box-sizing: border-box;
}
</style>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
