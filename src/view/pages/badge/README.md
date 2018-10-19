# Badge 徽标数
#### 概述
主要用于通知未读数的角标，提醒用户点击。

#### 使用指南

#### 示例

````
<i-badge dot>
    <view class="demo-badge"></view>
</i-badge>

<i-badge count="3">
    <view class="demo-badge"></view>
</i-badge>

<i-badge count="123" overflow-count="100">
    <view class="demo-badge"></view>
</i-badge>

<i-badge count="66" i-class-alone="demo-badge-alone" />

````

#### API

| 属性        | 说明             | 类型    | 默认值 |
|-------------|----------------|---------|--------|
| i-class-alone       | 自定义alone类名             | String  | -      |
| count    | 显示的数字，大于 overflowCount 时，显示 ${overflowCount}+，为 0 时隐藏  | Boolean | 0  |
| overflow-count | 展示封顶的数字值 | Number | 99  |
|dot|不展示数字，只有一个小红点，如需隐藏 dot ，需要设置 count 为 0|Boolean|false|