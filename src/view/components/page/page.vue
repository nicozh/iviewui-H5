<template>
  <div :class="[iClass, 'i-page']">
    <div class="i-page-prev" v-if="mode === 'button'">
      <i-button i-class="i-page-button" type="ghost" @click="handlePrev" :disabled="current === 1">
        <slot name="prev"></slot>
      </i-button>
    </div>
    <div class="i-page-number" v-if="mode !== 'pointer' && !simple">
      <div class="i-page-number-current">{{ current }}</div>/{{total}}
    </div>
    <div class="i-page-pointer" v-if="mode === 'pointer'">
      <div :class="['i-page-pointer-dot', index + 1 === current ? 'current' : '']" v-for="(item,index) in total" :key="index"></div>
    </div>
    <div class="i-page-next" v-if="mode === 'button'">
      <i-button i-class="i-page-button" type="ghost" @click="handleNext" :disabled="current === total">
        <slot name="next"></slot>
      </i-button>
    </div>
  </div>
</template>
<script>
import Button from "../button/button";
export default {
  name: "i-page",
  components: { [Button.name]: Button },
  props: {
    // button || number || pointer
    mode: {
      type: String,
      default: "button"
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    // 是否隐藏数值
    simple: {
      type: Boolean,
      default: false
    },
    iClass: String
  },
  methods: {
    handleChange(type) {
      this.$emit("change", type);
    },
    handlePrev() {
      this.handleChange("prev");
    },
    handleNext() {
      this.handleChange("next");
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";
.i-page {
  display: block;
  width: 100%;
  height: @btn-circle-size;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  &-prev {
    position: absolute;
    left: 10px;
    top: 0;
  }

  &-next {
    position: absolute;
    right: 10px;
    top: 0;
  }

  &-number {
    width: 100%;
    height: @btn-circle-size;
    line-height: @btn-circle-size;
    margin: 0 auto;
    text-align: center;

    &-current {
      display: inline;
      color: @primary-color;
    }
  }

  &-pointer {
    width: 100%;
    height: @btn-circle-size;
    line-height: @btn-circle-size;
    margin: 0 auto;
    text-align: center;

    &-dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 0 2px;
      border-radius: 50%;
      background: @btn-disable-color;

      &.current {
        background: @subsidiary-color;
      }
    }
  }

  &-button {
    display: inline-block;
    margin: 0 !important;
  }
}
</style>