const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('row', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Row).to.be.ok
  })

  describe('props', () => {
    it('接收 gutter', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      Vue.component('g-row', Row)
      Vue.component('g-col', Col)
      document.body.appendChild(div)
      div.innerHTML = `
          <g-row gutter="10">
              <g-col span="12"></g-col>
              <g-col span="12"></g-col>
          </g-row>>
      `
      const vm = new Vue({
        el: 'div'
      })
      setTimeout(() => {
        const rows = vm.$el.querySelector('.row')
        expect(window.getComputedStyle(rows).marginLeft).to.eq('-5px')
        expect(window.getComputedStyle(rows).marginRight).to.eq('-5px')
        const cols = vm.$el.querySelectorAll('.col')
        expect(window.getComputedStyle(cols[0]).paddingLeft).to.eq('5px')
        expect(window.getComputedStyle(cols[0]).paddingRight).to.eq('5px')
        done()
        vm.$el.remove()
        vm.$destroy()
      },100)
    })
    it('align ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const RowConstructor = Vue.extend(Row)
      const vm = new RowConstructor({
        propsData: {
          align: 'center'
        }
      }).$mount(div)
      const element = vm.$el
      expect(window.getComputedStyle(element).justifyContent).to.equal('center')
      vm.$el.remove()
      vm.$destroy()
    });
  })
})
