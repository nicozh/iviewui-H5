# Panel 面板

#### 概述

基础布局配件

#### 使用指南

#### 示例

``` html
<template>
    <div>
        <i-panel title="标题" hide-top>
            <div style="padding: 15px;">头部距离为 0 的 Panel</div>
        </i-panel>

        <i-panel title="标题">
            <div style="padding: 15px;">带有标题的 Panel</div>
        </i-panel>

        <i-panel title="标题" :hide-border="true">
            <div style="padding: 15px;">无边框的 Panel</div>
        </i-panel>
    </div>
</template>

```

#### API

##### Panel props

| 属性        | 说明             | 类型    | 默认值 |
|-------------|----------------|---------|--------|
| title       | 标题             | String  | -      |
| hide-top    | 是否将顶部置为0  | Boolean | false  |
| hide-border | 内容区域隐藏边框 | Boolean | false  |