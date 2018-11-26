<template>
  <div class="i-grid-icon">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "i-grid-icon"
};
</script>

<style lang="less">
@import "../styles/_base.less";

.i-grid-icon {
  display: block;
  width: @size-grid-icon;
  height: @size-grid-icon;
  margin: 0 auto;

  image {
    width: 100%;
    height: 100%;
  }
}
</style>