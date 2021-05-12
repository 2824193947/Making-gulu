import Vue from 'vue'
import Button from './button'

// 注册全局组件
Vue.component('g-button', Button)

new Vue({
  el: '#app'
})
