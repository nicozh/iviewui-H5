<template>
  <i-cell-group>
    <slot></slot>
  </i-cell-group>
</template>
<script>
import iCellGroup from "../list/cell-group";
export default {
  components: { [iCellGroup.name]: iCellGroup },
  name: "i-radio-group",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  watch: {
    value: function() {
      this.$emit("change", this.value);
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";
</style>
