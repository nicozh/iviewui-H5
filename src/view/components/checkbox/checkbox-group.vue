<template>
  <i-cell-group class="i-class">
    <slot></slot>
  </i-cell-group>
</template>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";
</style>
<script>
export default {
  name: "i-checkbox-group",
  props: {
    value: Array,
    max: {
      type: Number,
      default: 0
    }
  },
  watch: {
    value(value) {
      this.$emit("change", value);
    }
  }
};
</script>
