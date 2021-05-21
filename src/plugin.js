import Toast from './toast'

export default {
  install (vue, options) {
    vue.prototype.$toast = function (message) {
      let Constructor = vue.extend(Toast)
      let toast = new Constructor
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
