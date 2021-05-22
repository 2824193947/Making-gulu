import Toast from './toast'

function createdToast ({message, propsData, vue}) {
  let Constructor = vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

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
      currentToast = createdToast({message, prototype: toastOptions, vue})
    }
  }
}
