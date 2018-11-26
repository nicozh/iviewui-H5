<template>
    <div class="i-grid-label">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "i-grid-label"
};
</script>

<style lang="less">
@import "../styles/_base.less";

.i-grid-label {
  margin-top: 5px;
  display: block;
  text-align: center;
  color: @title-color;
  font-size: @size-font-base;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>