
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  // BDD 行为驱动测试

  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('接受selected', (done) => {
    let div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-tabs selected="mun">
        <g-tabs-head>
          <g-tabs-item name="pig">
              猪111
          </g-tabs-item>
          <g-tabs-item name="mun">牛22222</g-tabs-item>
          <g-tabs-item name="sheep">羊3333333333</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="pig">20$</g-tabs-pane>
          <g-tabs-pane name="mun">30$</g-tabs-pane>
          <g-tabs-pane name="sheep">10$</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
      `
    let vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="mun"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    }, 1000)
  })
  it('可以接受 direction', () =>{})
})
