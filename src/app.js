import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

// 注册全局组件
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})


// 单元测试 引入测试库
import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)

// 测试icon
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
// 测试loading
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
// 测试icon在左侧order为1
{
  // 测试元素
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  // 挂载测试元素(测试order需要挂载,因为挂载到页面才会有order属性)
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  // 成功之后删除 测试元素 和 对象
  vm.$el.remove()
  vm.$destroy()
}
// 测试icon在右侧order为2
{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
// 测试按钮 mock
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  const spy = chai.spy(function () {})
  vm.$mount()
  vm.$on('click', spy)
  // 获取组件按钮
  let button = vm.$el
  // 触发点击事件
  button.click()
  expect(spy).to.have.been.called()
}
