import Vue from 'vue'
import MessageConfig from './message.vue'
let instance = null
let timer = null
// https://cn.vuejs.org/v2/api/#Vue-extend
const MessageConstructor = Vue.extend(MessageConfig)

MessageConstructor.prototype.destroyeInstance = function () {
    setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
        instance = null
    }, 400);
}
MessageConstructor.prototype.close = function () {
    this.visible = false
    this.destroyeInstance()
    // this.$el.addEventListener('transitionend', this.destroyeInstance.bind(this))
    // 多个过渡'transitionend' 事件会触发两次，改用setTimeout等过渡完成
}

function initMessage(options) {
    // https://cn.vuejs.org/v2/api/#vm-mount
    let defaultOptions = {
        visible: false,
        content: '',
        duration: 2,
        type: 'default', // default || success || warning || error
    }
    let duration = options.duration ? options.duration * 1000 : 2000
    if (instance) {
        instance.visible = true
        instance = Object.assign(instance, { ...defaultOptions,
            ...options
        })
        if (timer) {
            clearInterval(timer)
        }
    } else {
        instance = new MessageConstructor({
            el: document.createElement('div'),
            propsData: Object.assign(defaultOptions, options)
        })
    }

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true
        timer = setTimeout(() => {
            instance.close()
        }, duration)
    })
}
initMessage.install = () => {
    Vue.use(MessageConfig);
};

Vue.prototype.$Message = initMessage;
export default initMessage