<template>
  <transition name="toast-bounce">
    <div v-if="visible">
      <div class="i-toast-mask" v-if="visible && mask" @click="handleHide" key="mask"></div>
      <div class="i-class i-toast" v-if="visible" key="content">
        <div v-if="type !== 'default'">
          <div class="i-toast-type">
            <i-icon class="i-toast-icon" type="success" v-if="type === 'success'"></i-icon>
            <i-icon class="i-toast-icon" type="prompt" v-else-if="type === 'warning'"></i-icon>
            <i-icon class="i-toast-icon" type="delete" v-else-if="type === 'error'"></i-icon>
            <div class="i-toast-icon i-toast-loading" v-else-if="type === 'loading'"></div>
          </div>
        </div>
        <div v-else>
          <i-icon class="i-toast-icon" :type="icon" v-if="icon"></i-icon>
          <img class="i-toast-image" :src="image" v-if="image" mode="aspectFit">
        </div>
        <div class="i-toast-content" v-if="content">{{content}}</div>
      </div>
    </div>
  </transition>

</template>
<script>
import Icon from "../icon/index";
export default {
  name: "toast",
  components: { [Icon.name]: Icon },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "default"
    },
    duration: {
      type: Number,
      default: 2
    },
    content: String,
    icon: String,
    image: String
  },
  methods: {
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";
.toast-bounce-enter,
.toast-bounce-leave-to {
  opacity: 0;
}
.toast-bounce-active,
.toast-bounce-leave-active {
  transition: opacity 0.5s;
}
.i-toast {
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: @size-font-base;
  line-height: 1.5em;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 18px;
  text-align: center;
  border-radius: 4px;
  z-index: @zindex-message;

  &-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: @zindex-message;
  }

  &-icon {
    font-size: 38px !important;
    margin-bottom: 6px;
  }

  &-image {
    max-width: 100px;
    max-height: 100px;
  }

  &-loading {
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 28px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff #fff #fff @primary-color;
    animation: btn-spin 0.8s linear;
    animation-iteration-count: infinite;
  }
}

@keyframes btn-spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
