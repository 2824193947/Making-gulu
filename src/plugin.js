import Toast from './toast'

// 如果已经创建了一个toast组件
// 把它存起来
// 如果有就调用close()删除方法
let currentToast

export default {
install (vue, options) {
    vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createdToast({
        message,
        propsData: toastOptions,
        vue,
        onClose: () => { currentToast = null }
      })
    }
  }
}

function createdToast ({message, propsData, vue, onClose}) {
  // 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
  let Constructor = vue.extend(Toast)
  // 实例化这个toast, vue对象
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$on('close', onClose)
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
