# Toast 轻提示

#### 概述

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

#### 使用指南

#### 示例

```html
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
```

#### API

##### Toast Options

| 属性     | 说明                                                                    | 类型    | 默认值  |
|----------|-----------------------------------------------------------------------|---------|---------|
| content  | 内容                                                                    | String  | -       |
| type     | 内置的类型，可选值为 default、success、warning、error、loading               | String  | default |
| duration | 持续时间，单位秒，设置为 0 则不自动关闭，需调用 $Toast.hide() 方法手动关闭 | Number  | 2       |
| icon     | 自定义图标                                                              | String  | -       |
| image    | 自定义图片地址                                                          | String  | -       |
| mask     | 是否显示一个隐藏的遮罩层，点击遮罩层可立即关闭组件                       | Boolean | true    |