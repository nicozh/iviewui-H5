# Layout 栅格布局
我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。

我们定义了两个概念，行row和列col，具体使用方法如下：

使用i-row在水平方向创建一行
将一组i-col插入在i-row中
在每个i-col中，键入自己的内容
通过设置i-col的span参数，指定跨越的范围，其范围是1到24
每个i-row中的i-col总和应该为24
#### 使用指南

#### 示例
```
<i-row>
    <i-col span="8" i-class="col-class">col-8</i-col>
    <i-col span="8" i-class="col-class">col-8</i-col>
    <i-col span="8" i-class="col-class">col-8</i-col>
</i-row>
```
#### API
##### Col props
| 属性   | 说明                                                         | 类型   | 默认值 |
|--------|------------------------------------------------------------|--------|--------|
| span   | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none | Number | -      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                        | Number | -      |