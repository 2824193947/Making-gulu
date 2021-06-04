
const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Col).to.be.ok
  })

  describe('props', () => {
    it('span ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColConstructor = Vue.extend(Col)
      const vm = new ColConstructor({
        propsData: {
          span: 24
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('col-24')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
    it('offset ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColConstructor = Vue.extend(Col)
      const vm = new ColConstructor({
        propsData: {
          offset: 2
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('offset-2')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
    it('测试pc ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColConstructor = Vue.extend(Col)
      const vm = new ColConstructor({
        propsData: {
          pc: {span: 2, offset: 2}
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('col-pc-2')).to.be.eq(true)
      expect(vm.$el.classList.contains('offset-pc-2')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
    it('测试ipad ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColConstructor = Vue.extend(Col)
      const vm = new ColConstructor({
        propsData: {
          ipad: {span: 2, offset: 2}
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('col-ipad-2')).to.be.eq(true)
      expect(vm.$el.classList.contains('offset-ipad-2')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
    it('测试narrow-pc ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColConstructor = Vue.extend(Col)
      const vm = new ColConstructor({
        propsData: {
          narrowPc: {span: 2, offset: 2}
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('col-narrowPc-2')).to.be.eq(true)
      expect(vm.$el.classList.contains('offset-narrowPc-2')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
    it('测试wide-pc ', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColConstructor = Vue.extend(Col)
      const vm = new ColConstructor({
        propsData: {
          widePc: {span: 2, offset: 2}
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('col-widePc-2')).to.be.eq(true)
      expect(vm.$el.classList.contains('offset-widePc-2')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
  })
})
