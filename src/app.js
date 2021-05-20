import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from "./row";
import Col from "./col";
import Content from "./content"
import Footer from "./footer";
import Layout from "./layout";
import Side from "./side"
import Header from "./header"

// 注册全局组件
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-side', Side)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
  methods: {
    inputChange () {
      console.log(1)
    }
  }
})
