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
  })
})
