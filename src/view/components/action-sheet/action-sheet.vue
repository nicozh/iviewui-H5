<template>
  <div>
    <div :class="['i-as-mask', iClassMask, visible ? 'i-as-mask-show' : '' ]" @click="handleClickMask"></div>
    <div :class="[iClass, 'i-as' , visible ? 'i-as-show' : '' ]">
      <div :class="['i-as-header', iClassHeader]">
        <slot name="header"></slot>
      </div>
      <div class="i-as-actions">
        <div class="i-as-action-item" v-for="(item,index) in actions" :key="item.name">
          <i-button @click="handleClickItem(index)" :data-index="index" type="ghost" size="large" :long="true">
            <div class="i-as-btn-loading" v-if="item.loading"></div>
            <i-icon v-if="item.icon" :type="item.icon" i-class="i-as-btn-icon"></i-icon>
            <div class="i-as-btn-text" :style="{color: item.color ? item.color : ''}">{{ item.name
              }}</div>
          </i-button>
        </div>
      </div>
      <div class="i-as-cancel" v-if="showCancel">
        <i-button i-class="i-as-cancel-btn" type="ghost" size="large" :long="true" @click="handleClickCancel">{{
          cancelText }}</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../button/button";
export default {
  name: "i-action-sheet",
  components: { [Button.name]: Button },
  props: {
    iClassMask: String,
    iClass: String,
    iClassHeader: String,
    visible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    actions: {
      type: Array,
      default: function (){
        return []
      }
    }
  },
  methods: {
    handleClickMask() {
      if (!this.maskClosable) return;
      this.handleClickCancel();
    },

    handleClickItem(index) {
      this.$emit("click", index);
    },

    handleClickCancel() {
      this.$emit("cancel");
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-as {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  right: 0;
  bottom: 0;
  background: @background-color-base;
  transform: translate3d(0, 100%, 0);
  transform-origin: center;
  transition: all @transition-time ease-in-out;
  z-index: @zindex-select;
  visibility: hidden;

  &-show {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: @zindex-select;
    transition: all @transition-time ease-in-out;
    opacity: 0;
    visibility: hidden;

    &-show {
      opacity: 1;
      visibility: visible;
    }
  }

  &-action-item {
    position: relative;

    &::after {
      .hairline();
      border-bottom-width: 1px;
    };
  }

  &-header {
    background: #fff;
    text-align: center;
    //padding: 16px;
    position: relative;
    font-size: @size-font-small;
    color: @subsidiary-color;

    &::after {
      .hairline();
      border-bottom-width: 1px;
    }
  }

  &-cancel {
    margin-top: 6px;
  }

  &-btn {
    &-loading {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      width: 12px;
      height: 12px;
      background: transparent;
      border-radius: 50%;
      border: 2px solid #e5e5e5;
      border-color: #666 #e5e5e5 #e5e5e5 #e5e5e5;
      animation: btn-spin 0.6s linear;
      animation-iteration-count: infinite;
    }

    &-text {
      display: inline-block;
      vertical-align: middle;
    }

    &-icon {
      font-size: @size-font-base !important;
      margin-right: 4px;
    }
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