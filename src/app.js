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
import plugin from "./plugin";
import Tabs from './tabs';
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from "./collapse"
import CollapseItem from "./collapse-item"

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectTab: ['2']
  },
  methods: {
    showToast () {
      this.$toast('点啦点啦点啦点啦',{
        position: 'top',
        autoClose: 1.5
      });
    },
    yyy () {
      console.log('触发yyy')
    }
  }
})
