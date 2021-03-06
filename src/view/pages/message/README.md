# Message 全局提醒

#### 概述

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-button type="ghost" @click="handleDefault">默认提醒</i-button>
        <i-button type="ghost" @click="handleSuccess">成功提醒</i-button>
        <i-button type="ghost" @click="handleWarning">警告提醒</i-button>
        <i-button type="ghost" @click="handleError">错误提醒</i-button>
        <i-button type="ghost" @click="handleDuration">自定义持续时间</i-button>
    </div>
</template>
<script>
export default {
  methods: {
    handleDefault() {
      this.$Message({
        content: "这是一条普通提醒"
      });
    },
    handleSuccess() {
      this.$Message({
        content: "这是一条成功提醒",
        type: "success"
      });
    },
    handleWarning() {
      this.$Message({
        content: "这是一条警告提醒",
        type: "warning"
      });
    },
    handleError() {
      this.$Message({
        content: "这是一条错误提醒",
        type: "error"
      });
    },
    handleDuration() {
      this.$Message({
        content: "我将在 5 秒后消失",
        duration: 5
      });
    }
  }
};
</script>
```
#### API

##### $Message options

| 属性     | 说明                                              | 类型   | 默认值  |
|----------|-------------------------------------------------|--------|---------|
| content  | 内容                                              | String | -       |
| type     | 内置的类型，可选值为 default、success、warning、error | String | default |
| duration | 持续时间，单位秒                                   | Number | 2       |
