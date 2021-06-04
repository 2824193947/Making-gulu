import Button from "../src/button/button";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    it('接收 value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })
    it('接收 disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it('接收 readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    it('接收 error', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
      vm.$destroy()
    })
  })
  describe('事件', () => {
    it('支持  事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((item) => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(item, callback)
        // 手动创建一个event事件  这些'change', 'input', 'focus', 'blur'
        let event = new Event(item)
        // 为了兼容v-model,需要传入值,
        Object.defineProperty(event, 'target', {
          value: {value: 'hi'}, enumerable: true
        })
        let inputElement = vm.$el.querySelector('input')
        // 触发这个事件
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
        // 因为我们为了支持v-model, 派发的不是$event, 而是派发了$event.target.value, 所以要判断是否有值,而不是是否有event
        // calledWith就是去接收const callback = sinon.fake() 这个函数的参数e (e===event)
        // expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})
