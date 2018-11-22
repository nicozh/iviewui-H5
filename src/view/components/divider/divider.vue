<template>
    <div :class="['i-divider', iClass]" :style="getStyle(color,size,height)">
        <div class="i-divider-content" v-if="content !== ''">
            {{content}}
        </div>
        <div class="i-divider-content" v-else>
            <slot></slot>
        </div>
        <div class="i-divider-line" :style="{background:lineColor}"></div>
    </div>
</template>
<script>
export default {
  name: "i-divider",
  props: {
    iClass: String,
    content: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 48
    },
    color: {
      type: String,
      default: "#80848f"
    },
    lineColor: {
      type: String,
      default: "#e9eaec"
    },
    size: {
      type: Number,
      default: 12
    }
  },
  methods: {
    getStyle(color, size, height) {
      var color = "color:" + color + ";";
      var size = "font-size:" + size + "px;";
      var height = "height:" + height + "px;";
      return color + size + height;
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-divider {
  width: 100%;
  text-align: center;
  font-size: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: @background-color-base;
    top: 50%;
  }

  &-content {
    background: #ffffff;
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 10px;
  }
}
</style>