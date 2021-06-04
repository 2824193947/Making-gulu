<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="wrapper1">
    <g-button>默认按钮</g-button>
    <g-button :loading="loading" @click="loading = !loading">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    </div>
    <br>
    <g-button icon="settings">默认按钮</g-button>
    <g-button icon="settings" icon-position="right">默认按钮</g-button>
    <g-button-group>
      <g-button>默认按钮1</g-button>
      <g-button>默认按钮2</g-button>
    </g-button-group>
    <p>
      <strong>代码<></strong>
    </p>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'

export default {
  name: 'button-demos',
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup
  },
  data () {
    return {
      loading: true,
      content:
          `<g-button>默认按钮</g-button>
            <g-button :loading="loading" @click="loading = !loading">默认按钮</g-button>
            <g-button disabled>默认按钮</g-button>
            <g-button icon="settings">默认按钮</g-button>
            <g-button icon="settings" icon-position="right">默认按钮</g-button>
            <g-button-group>
              <g-button>默认按钮1</g-button>
              <g-button>默认按钮2</g-button>
            </g-button-group>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
}
</script>

<style scoped>
.wrapper1 {
  margin-bottom: 10px;
}
</style>

