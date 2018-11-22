<template>
    <div>
        <div :class="['i-modal-mask', 'i-class-mask', visible ? 'i-modal-mask-show' : '']"></div>
        <div :class="['i-class', 'i-modal',  visible ? 'i-modal-show' : '']">
            <div class="i-modal-main">
                <div class="i-modal-content">
                    <div class="i-modal-title" v-if="title">{{ title }}</div>
                    <div class="i-modal-body">
                        <slot></slot>
                    </div>
                    <div class="i-modal-actions" v-if="actions.length !==0">
                        <div v-if="actionMode === 'horizontal'">
                            <i-grid i-class="i-modal-grid">
                                <i-grid-item :i-class="actions.length === (index + 1) ? 'i-modal-grid-item-last' : 'i-modal-grid-item'" v-for="(item,index) in actions" :key="item.name">
                                    <!-- <template is="button" :data="item, index"></template> -->
                                    <template name="button">
                                        <i-button long type="ghost" @click="handleClickItem(index)">
                                            <div class="i-modal-btn-loading" v-if="item.loading"></div>
                                            <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                                            <div class="i-modal-btn-text" :style="{'color':item.color ? item.color : '' }">{{
                                                item.name }}</div>
                                        </i-button>
                                    </template>
                                </i-grid-item>
                            </i-grid>
                        </div>
                        <div v-else>
                            <div class="i-modal-action-vertical" v-for="(item,index) in actions" :key="item.name">
                                <!-- <template is="button" :data="item, index"></template> -->
                                <template name="button">
                                    <i-button long type="ghost" @click="handleClickItem(index)">
                                        <div class="i-modal-btn-loading" v-if="item.loading"></div>
                                        <i-icon v-if="item.icon" :type="item.icon" i-class="i-modal-btn-icon"></i-icon>
                                        <div class="i-modal-btn-text" :style="{'color':item.color ? item.color : '' }">{{
                                            item.name }}</div>
                                    </i-button>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="i-modal-actions" v-else>
                        <i-grid i-class="i-modal-grid" v-if="showOk || showCancel">
                            <i-grid-item i-class="i-modal-grid-item" v-if="showCancel">
                                <i-button i-class="i-modal-btn-cancel" long type="ghost" @click="handleClickCancel">{{
                                    cancelText }}</i-button>
                            </i-grid-item>
                            <i-grid-item i-class="i-modal-grid-item-last" v-if="showOk">
                                <i-button i-class="i-modal-btn-ok" long type="ghost" @click="handleClickOk">{{
                                    okText }}</i-button>
                            </i-grid-item>
                        </i-grid>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
export default {
  name: "i-modal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    showOk: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    // 按钮组，有此值时，不显示 ok 和 cancel 按钮
    actions: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // horizontal || vertical
    actionMode: {
      type: String,
      default: "horizontal"
    }
  },
  methods: {
    handleClickItem(index) {
      // const dataset = currentTarget.dataset || {};
      // const {index} = dataset;
      console.log(index);
      this.$emit("click", index);
      // this.triggerEvent('click', {
      //     index
      // });
    },
    handleClickOk() {
      // this.triggerEvent('ok');
      this.$emit("ok");
    },
    handleClickCancel() {
      // this.triggerEvent('cancel');
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-modal {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: @zindex-modal;
  display: flex;
  outline: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transform: translateZ(1px);

  opacity: 0;
  visibility: hidden;

  &-show {
    visibility: visible;
    opacity: 1;
  }

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: @zindex-modal;
    transition: all @transition-time ease-in-out;
    opacity: 0;
    visibility: hidden;

    &-show {
      opacity: 1;
      visibility: visible;
    }
  }

  &-main {
    width: 270px;
    position: relative;
  }

  &-content {
    border-radius: 7px;
    padding-top: 15px;
    position: relative;
    background-color: #fff;
    border: 0;
    background-clip: padding-box;
    text-align: center;
    height: 100%;
    overflow: hidden;
  }

  &-body {
    max-height: 100px;
    margin-bottom: 15px;
    font-size: @size-font-base;
    color: @subsidiary-color;
    height: 100%;
    line-height: 1.5;
    overflow: auto;
  }

  &-title {
    padding: 6px 15px 15px;
    margin: 0;
    font-size: 18px;
    line-height: 1;
    color: @title-color;
    text-align: center;
  }

  &-actions {
    margin: 0 1px;
  }

  &-action {
    &-vertical {
      position: relative;

      &:after {
        .hairline();
        border-top-width: 1px;
      }
    }
  }

  &-grid {
    border-radius: 0 0 7px 7px;
    border-left: none;

    &-item,
    &-item-last {
      padding: 0 !important;
      border-bottom: none !important;
    }

    &-item-last {
      border-right: none !important;
    }
  }

  &-btn {
    &-ok {
      color: @primary-color !important;
    }

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