<template>
    <div :class="['i-grid-item',iClass]" :style="{width: width}">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'i-grid-item',
  props: {
    iClass: String
  },
  data() {
    return {
      width: "33.33%"
    };
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";

.i-grid-item {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 100% / 3;
  box-sizing: border-box;

  border-right: 1px solid @border-color-split;
  border-bottom: 1px solid @border-color-split;
}
</style>