
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsItem from '../src/tabs/tabs-item'
import TabsBody from '../src/tabs/tabs-body'
import TabsPane from '../src/tabs/tabs-pane'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Items', () => {
  // BDD 行为驱动测试

  it('TabsItem存在.', () => {
    expect(TabsItem).to.be.ok
  })
  it('接受 name.', () => {
    let Constructor = Vue.extend(TabsItem)
    let vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$props.name).to.be.eq('xxx')
  })
  it('接受 disabled', () => {
    let Constructor = Vue.extend(TabsItem)
    let vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.eq(true)
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
