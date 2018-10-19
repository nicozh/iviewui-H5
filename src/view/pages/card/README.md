# Card 卡片
#### 概述
基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
#### 使用指南
#### 示例
```
<i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">内容不错</view>
    <view slot="footer">尾部内容</view>
</i-card>
```
#### API
| 属性  | 说明       | 类型    | 默认值 |
|-------|----------|---------|--------|
| full  | 是否通栏   | Boolean | false  |
| thumb | 左侧缩略图 | String  | -      |
| title | 卡片标题   | String  | -      |
| extra | 额外内容   | String  | -      |
#### Card slot 
| 名称    | 说明     |
|---------|--------|
| content | 内容     |
| footer  | 尾部内容 |