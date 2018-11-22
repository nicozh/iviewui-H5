<template>
    <div class="i-badge">
        <slot></slot>
        <div class="i-badge-dot" v-if="dot"></div>
        <div :class="['i-badge-count', 'i-class-alone', iClassAlone]" v-else-if="count !== 0">{{ finalCount }}</div>
    </div>
</template>
<script>
export default {
  name: "i-badge",
  props: {
    count: {
      type: Number,
      default: 0
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    iClassAlone: String
  },
  data() {
    return {
      data: {
        count: this.count,
        overflowCount: this.overflowCount
      }
    };
  },
  computed: {
    finalCount() {
      return parseInt(this.data.count) >= parseInt(this.data.overflowCount)
        ? `${this.data.overflowCount}+`
        : this.data.count;
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-badge {
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;

  &-count {
    position: absolute;
    transform: translateX(50%);
    top: -6px;
    right: 0;
    height: 18px;
    border-radius: 9px;
    min-width: 18px;
    background: @error-color;
    border: 1px solid transparent;
    color: #fff;
    line-height: 18px;
    text-align: center;
    padding: 0 5px;
    font-size: 12px;
    white-space: nowrap;
    transform-origin: -10% center;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;

    &-alone {
      top: auto;
      display: block;
      position: relative;
      transform: translateX(0);
    }
  }

  &-dot {
    position: absolute;
    transform: translateX(-50%);
    transform-origin: 0 center;
    top: -4px;
    right: -8px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background: @error-color;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
  }
}
</style>