<template>
  <div :class="[iClass, 'i-step-item', getClass(status,current,index),  direction === 'vertical' ? 'i-step-vertical' : 'i-step-horizontal']" :style="getItemStyle(len,direction)">
    <div class="i-step-item-ico">
      <div class="i-step-ico" v-if="noIco(status,current,index,icon)">{{ index+1 }}</div>
      <div class="i-step-ico" v-else>
        <i-icon i-class="i-step-ico-in" :type="getIcoClass(status,icon)"></i-icon>
      </div>
      <div class="i-step-line" v-if="index !== len - 1"></div>
    </div>
    <div class="i-step-item-main">
      <div class="i-step-item-title" v-if="title !== ''">
        {{title}}
      </div>
      <div class="i-step-item-title" v-else>
        <slot name="title"></slot>
      </div>
      <div class="i-step-item-content" v-if="content !== ''">
        {{content}}
      </div>
      <div class="i-step-item-content" v-else>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/index";
export default {
  name: "i-step",
  components: { [Icon.name]: Icon },
  props: {
    iClass: String,
    status: {
      type: String,
      //wait、process、finish、error
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    let allStatus = ["wait", "process", "finish", "error"];
    return {
      allStatus: allStatus,
      // data: {
      len: 1,
      //current in step index
      index: 0,
      //parent component select current index
      current: 0,
      //css direction
      direction: "horizontal"
      // }
    };
  },
  methods: {
    noIco(status, current, index, icon) {
      var aindex = this.allStatus.indexOf(status);
      var noIcon = true;
      if (index < current || icon !== "") {
        noIcon = false;
      }
      return noIcon;
    },
    getIcoClass(status, ico) {
      var iclass = "";
      if (status === "error") {
        iclass = "close";
      } else {
        iclass = "right";
      }
      if (ico !== "") {
        iclass = ico;
      }
      return iclass;
    },
    getItemStyle: function(len, direction) {
      if (direction === "horizontal") {
        return "width :" + 100 / len + "%";
      } else {
        return "width : 100%;";
      }
    },
    getClass(status, current, index) {
      //wait、process、finish、error
      var startClass = "i-step-";
      var classes = "";
      var cindex = this.allStatus.indexOf(status);
      if (cindex !== -1) {
        classes = startClass + this.allStatus[cindex];
      }
      if (index < current) {
        classes = startClass + "finish";
      } else if (index === current) {
        classes = startClass + "process";
      }
      return classes;
    },
    updateDataChange(options) {
      let { len, index, current, direction } = options;
      this.len = len;
      this.index = index;
      this.current = current;
      this.direction = direction;
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-step {
  &-ico {
    width: 24px;
    height: 100%;
    border-radius: 100%;
    background: #fff;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    border: @border-color-base solid 1px;

    &-in {
      vertical-align: baseline;
    }
  }

  &-line {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 100%;
    height: 1px;
    background: @border-color-base;
  }

  &-horizontal {
    .i-step-ico::after {
      position: absolute;
      top: 11px;
      left: 23px;
      z-index: 1;
      content: "";
      height: 1px;
      background: #fff;
      width: 10px;
    }

    .i-step-item-main {
      text-align: center;
    }

    .i-step-ico::before {
      position: absolute;
      top: 11px;
      left: -11px;
      z-index: 1;
      content: "";
      height: 1px;
      background: #fff;
      width: 10px;
    }
  }

  &-ico {
    box-sizing: border-box;
    font-size: 12px;
  }

  &-process {
    .i-step-ico {
      border: @primary-color solid 1px;
      color: #fff;
      background: @primary-color;
    }

    .i-step-line {
      // background: @primary-color;
    }
  }

  &-wait {
    .i-step-ico {
      border: #e9eaec solid 1px;
      color: #e9eaec;
    }

    .i-step-line {
      background: @primary-color;
    }
  }

  &-finish {
    .i-step-ico {
      border: @primary-color solid 1px;
      color: @primary-color;
    }

    .i-step-line {
      background: @primary-color;
    }
  }

  &-error {
    .i-step-ico {
      border: @error-color solid 1px;
      color: @error-color;
    }

    .i-step-line {
      background: @error-color;
    }
  }

  &-item {
    font-size: 12px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding-left: 10px;
    vertical-align: top;
    margin-right: -4px; // 去除inline-block之间的间隙
    &-ico {
      width: 100%;
      height: 24px;
      line-height: 24px;
      text-align: center;
    }

    &-main {
      margin-top: 10px;
      clear: both;
    }

    &-title {
      font-size: 14px;
      font-weight: bold;
      color: @title-color;
    }

    &-content {
      font-size: 12px;
      font-weight: bold;
      margin-top: 2px;
      color: @subsidiary-color;
    }
  }
}

.i-step {
  &-vertical {
    padding-bottom: 30px;

    .i-step-item-ico {
      width: 24px;
      float: left;
    }

    .i-step-item-main {
      margin-left: 40px;
      margin-top: 0;
      clear: inherit;
    }

    .i-step-line {
      position: absolute;
      height: 100%;
      top: 0;
      left: 10px;
      margin: 0 0 0 12px;
      width: 1px;
    }
  }
}
</style>