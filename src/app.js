import Vue from 'vue'
import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Input from './input'
import Row from "./grid/row";
import Col from "./grid/col";
import Content from "./layout/content"
import Footer from "./layout/footer";
import Layout from "./layout/layout";
import Side from "./layout/side"
import Header from "./layout/header"
import plugin from "./plugin";
import Tabs from './tabs/tabs';
import TabsHead from './tabs/tabs-head'
import TabsItem from './tabs/tabs-item'
import TabsBody from './tabs/tabs-body'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover'
import Collapse from "./collapse/collapse"
import CollapseItem from "./collapse/collapse-item"
import Cascader from "./cascader"

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
Vue.component('g-cascader', Cascader)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    source: [
      {
        name: "浙江",
        children: [
          {name: "杭州"},
          {name: "嘉信"},
          {name: "呼市"},
        ]
      },
      {
        name: "内蒙古",
        children: [
          {name: "呼和浩特"},
          {name: "巴盟"},
          {
            name: "武川",
            children: [
              {name: "哈乐"},
              {name: "哈乐"}
            ]
          },
        ]
      }]
    },
  methods: {
  }
})
