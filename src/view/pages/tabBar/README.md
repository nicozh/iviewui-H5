# TabBar 面板

#### 概述

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-panel title="基本用法"></i-panel>
        <i-tab-bar v-model="active" @change="change1">
            <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
            <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
            <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" :count="3" title="Notice"></i-tab-bar-item>
            <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
        </i-tab-bar>
        <i-panel title="自定义主题色"></i-panel>
        <i-tab-bar v-model="active" @change="change2" color="#f759ab">
            <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
            <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
            <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
            <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
        </i-tab-bar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change1(index) {
      console.log(index);
    },
    change2(index) {
      console.log(index);
    }
  }
};
</script>
```

#### API

##### TabBar props

| 属性    | 说明                      | 类型    | 默认值 |
|---------|-------------------------|---------|--------|
| v-model | 当前所在的标签的 index 值 | Number  | -      |
| color   | 主题色                    | String  | -      |
| fixed   | 是否固定在底部            | Boolean | false  |

##### TabBar events

| 事件名 | 说明           | 返回值 |
|--------|--------------|--------|
| change | 切换标签时触发 | index    |

##### TabBarItem props

| 属性         | 说明                             | 类型    | 默认值 |
|--------------|--------------------------------|---------|--------|
| icon         | 图标                             | String  | -      |
| current-icon | 当前面板被选中时的图标           | String  | -      |
| img          | 自定义图片 url                   | String  | -      |
| current-img  | 当前面板被选中时的自定义图片 url | String  | -      |
| key          | 标签的唯一标识                   | String  | -      |
| title        | 名称                             | String  | -      |
| dot          | 是否显示小红点                   | Boolean | false  |
| count        | 徽标数                           | Number  | 0      |