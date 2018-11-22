# Card 卡片

#### 概述

基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <p style="margin: 16px">默认</p>
        <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
            <p slot="content">内容不错</p>
            <p slot="footer">尾部内容</p>
        </i-card>

        <p style="margin: 16px">通栏</p>
        <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
            <p slot="content">内容不错</p>
            <p slot="footer">尾部内容</p>
        </i-card>

        <p style="margin: 16px">自定义图片样式</p>
        <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg" class="card-demo">
            <p slot="content">内容不错</p>
            <p slot="footer">尾部内容</p>
        </i-card>
    </div>
</template>
<style lang="less">
    .card-demo img {
        border-radius: 50%;
    }
</style>
```

#### API

##### Card props

| 属性  | 说明       | 类型    | 默认值 |
|-------|----------|---------|--------|
| full  | 是否通栏   | Boolean | false  |
| thumb | 左侧缩略图 | String  | -      |
| title | 卡片标题   | String  | -      |
| extra | 额外内容   | String  | -      |

##### Card slot 

| 名称    | 说明     |
|---------|--------|
| content | 内容     |
| footer  | 尾部内容 |