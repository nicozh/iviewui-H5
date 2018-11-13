import Vue from 'vue'
import ToastConfig from './toast.vue'
let instance = null
let timer = null
// https://cn.vuejs.org/v2/api/#Vue-extend
const ToastConstructor = Vue.extend(ToastConfig)
ToastConstructor.prototype.close = function () {
  this.visible = false
  // this.destroyeInstance()
  this.$el.addEventListener('transitionend', this.destroyeInstance.bind(this))
}

ToastConstructor.prototype.destroyeInstance = function () {
  instance = null
  this.$destroy(true)
  this.$el.removeEventListener('transitionend', this.destroyeInstance)
  this.$el.parentNode.removeChild(this.$el)
}

function init(options) {
  // https://cn.vuejs.org/v2/api/#vm-mount
  let defaultOptions = {
    visible: true,
    content: '默认',
    icon: "",
    image: "",
    duration: 2,
    mask: true,
    type: "default" // default || success || warning || error || loading
  }
  if (instance) {
    instance.visible = true
    instance = Object.assign(instance, { ...defaultOptions,
      ...options
    })
    if (timer) {
      clearInterval(timer)
    }
    instance.$el.removeEventListener('transitionend', instance.destroyeInstance)
  } else {
    instance = new ToastConstructor({
      el: document.createElement('div'),
      propsData: Object.assign(defaultOptions, options)
    })
  }

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
    timer = setTimeout(() => {
      instance.close()
    }, 3000)
  })
}
init.install = () => {
  Vue.use(ToastConfig);
};

Vue.prototype.$Toast = init;
export default init