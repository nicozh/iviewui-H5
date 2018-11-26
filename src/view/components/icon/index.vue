<template>
  <i :style="{fontSize: size + 'px',color:color}" :class="['i-icon' , type === '' ? '' : 'i-icon-' +  type ,  'custom' ,]"></i>
</template>
<script>
export default {
  name: "i-icon",
  props: {
    type: {
      type: String
    },
    custom: {
      type: String
    },
    size: {
      type: [Number,String],
      value: 14
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
@import url(./index.less);
</style>