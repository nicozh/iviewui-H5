<template>
  <div>
    <i-button type="ghost" @click="handleText">只显示文本</i-button>
    <i-button type="ghost" @click="handleSuccess">成功</i-button>
    <i-button type="ghost" @click="handleWarning">警告</i-button>
    <i-button type="ghost" @click="handleError">错误</i-button>
    <i-button type="ghost" @click="handleLoading">Loading</i-button>
    <i-button type="ghost" @click="handleIcon">使用图标</i-button>
    <i-button type="ghost" @click="handleImage">使用自定义图片</i-button>
    <i-button type="ghost" @click="handleMask">无遮罩层</i-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleText() {
      this.$Toast({ content: "这是文本提示" });
    },
    handleSuccess() {
      this.$Toast({
        content: "成功的提示",
        type: "success"
      });
    },
    handleWarning() {
      this.$Toast({
        content: "警告的提示",
        type: "warning"
      });
    },
    handleError() {
      this.$Toast({
        content: "错误的提示",
        type: "error"
      });
    },
    handleLoading() {
      this.$Toast({
        content: "加载中",
        type: "loading"
      });
    },
    handleIcon() {
      this.$Toast({
        content: "使用内置的图标",
        icon: "praise"
      });
    },
    handleImage() {
      this.$Toast({
        content: "使用自定义图片",
        image: "https://i.loli.net/2017/08/21/599a521472424.jpg"
      });
    },
    handleMask() {
      this.$Toast({
        content: "5秒后自动关闭",
        icon: "prompt",
        duration: 0,
        mask: false
      });
    }
  }
};
</script>
