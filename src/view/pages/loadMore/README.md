# LoadMore 页底提示

#### 概述

用于底部的加载状态。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-load-more></i-load-more>
        <i-load-more tip="暂无数据" :loading="false"></i-load-more>
        <i-load-more :loading="false"></i-load-more>
    </div>
</template>
```

#### API

##### LoadMore props

| 属性    | 说明           | 类型    | 默认值 |
|---------|--------------|---------|--------|
| loading | 是否正则加载中 | Boolean | true   |
| tip     | 提示文字       | String  | -      |