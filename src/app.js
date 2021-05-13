import Vue from 'vue'
import Button from './button'
import Icon from './icon'

// 注册全局组件
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})
