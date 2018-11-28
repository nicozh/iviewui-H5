# Divider 分割符

#### 概述

区隔内容的分割线。

对不同章节的文本段落进行分割。
#### 使用指南

#### 示例

```html
<i-divider content="加载已经完成,没有其他数据"></i-divider>
<i-divider content="加载已经完成,没有其他数据" color="#2d8cf0" lineColor="#2d8cf0"></i-divider>
<i-divider content="加载已经完成,没有其他数据" lineColor="#2d8cf0"></i-divider>
<i-divider content="加载已经完成,没有其他数据" color="#ed3f14" lineColor="#ed3f14"></i-divider>
<i-divider content="加载已经完成,没有其他数据" color="#ff9900" lineColor="#ff9900"></i-divider>
<i-divider  color="#2d8cf0" lineColor="#2d8cf0">加载已经完成,没有其他数据</i-divider>
<i-divider color="#ed3f14" lineColor="#ed3f14">加载已经完成,没有其他数据</i-divider>
```

#### API

##### Divider props

| 属性       | 说明                   | 类型   | 默认值  |
|------------|----------------------|--------|---------|
| content    | 内容，不定义则使用 slot | String  | -       |
| height     | 高度                   | Number | 48      |
| color      | 文字颜色               | String | #80848f |
| lineColor | 辅助线的颜色           | String  | #e9eaec |
| size       | 文字大小               | String  | 12      |