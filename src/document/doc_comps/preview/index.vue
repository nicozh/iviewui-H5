<template>
  <div class="comp-preview">
    <div style="height:90%">
      <iframe :src="currentUrl" frameborder="0" class="comp-preview-window"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['currentUrl']
  };
</script>

<style lang="less">
  .comp-preview {
    margin: 30px 20px 0;
    background-image: url('../../static/img/phone.png');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    padding: 100px 16px;
    box-sizing: border-box;
    width: 365px;

    &-window {
      width: 100%;
      height: 580px;
      // background-color: #fff;
      background-color: #F1F4F8;
    }
  }
</style>