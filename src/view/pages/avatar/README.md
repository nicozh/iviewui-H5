# Avatar 头像

#### 概述

用来代表用户或事物，支持图片或字符展示。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-panel title="圆形"></i-panel>
        <i-row class="row-class">
            <i-col span="8">
                <i-avatar size="small">梁</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar>梁</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar size="large">梁</i-avatar>
            </i-col>
        </i-row>

        <i-panel title="方形"></i-panel>

        <i-row class="row-class">
            <i-col span="8">
                <i-avatar size="small" shape="square">A</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar shape="square">A</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar size="large" shape="square">A</i-avatar>
            </i-col>
        </i-row>

        <i-row i-class="row-class">
            <i-col span="8"></i-col>
            <i-col span="8"></i-col>
            <i-col span="8"></i-col>
        </i-row>

        <i-panel title="图片"></i-panel>

        <i-row class="row-class">
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar>
            </i-col>
        </i-row>

        <i-row class="row-class">
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" shape="square"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default" shape="square"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" shape="square"></i-avatar>
            </i-col>
        </i-row>
    </div>
</template>
<style lang="less">
.row-class {
  margin: 16px;
}
</style>

```

#### Avatar props

| 属性  | 说明                                        | 类型   | 默认值  |
|-------|-------------------------------------------|--------|---------|
| shape | 指定头像的形状，可选值为 circle、square       | String | circle  |
| size  | 设置头像的大小，可选值为 large、small、default | String | default |
| src   | 图片类头像的资源地址                        | String | -       |