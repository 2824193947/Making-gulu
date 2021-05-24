import Row from "../src/row";

const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/toast";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('toast', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Toast).to.be.ok
  })
  describe('prop', () => {
    it('接受 autoClose', () => {
      const ToastConstructor = Vue.extend(Toast)
      const vm = new ToastConstructor({
        propsData: {
          autoClose: 1.5
        }
      }).$mount()
      expect(vm.$props.autoClose).to.be.eq(1.5)
    })
    it('接受 closeButton', (done) => {
      const callback = sinon.fake()
      const ToastConstructor = Vue.extend(Toast)
      const vm = new ToastConstructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback: callback
          }
        }
      }).$mount()
      let close = vm.$el.querySelector('.close')
      expect(close.textContent.trim()).to.be.eq('关闭吧')
      setTimeout(() => {
        close.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })
  })
})
