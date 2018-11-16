# Tabs 标签页

#### 概述

用于让用户在不同的视图中进行切换。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-panel title="基本用法"></i-panel>

        <i-tabs :current="current" @change="handleChange">
            <i-tab keys="tab1" title="选项1"></i-tab>
            <i-tab keys="tab2" title="选项2"></i-tab>
            <i-tab keys="tab3" title="选项3"></i-tab>
        </i-tabs>

        <i-panel title="自定义主题色"></i-panel>

        <i-tabs :current="current" color="#f759ab" @change="handleChange">
            <i-tab keys="tab1" title="选项1"></i-tab>
            <i-tab keys="tab2" title="选项2"></i-tab>
            <i-tab keys="tab3" title="选项3"></i-tab>
        </i-tabs>

        <i-panel title="徽标"></i-panel>

        <i-tabs :current="current" @change="handleChange">
            <i-tab keys="tab1" title="选项1" :count="3"></i-tab>
            <i-tab keys="tab2" title="选项2"></i-tab>
            <i-tab keys="tab3" title="选项3" dot></i-tab>
        </i-tabs>

        <i-panel title="滚动"></i-panel>

        <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
            <i-tab keys="tab1" title="选项1"></i-tab>
            <i-tab keys="tab2" title="选项2"></i-tab>
            <i-tab keys="tab3" title="选项3"></i-tab>
            <i-tab keys="tab4" title="选项4"></i-tab>
            <i-tab keys="tab5" title="选项5"></i-tab>
            <i-tab keys="tab6" title="选项6"></i-tab>
            <i-tab keys="tab7" title="选项7"></i-tab>
            <i-tab keys="tab8" title="选项8"></i-tab>
            <i-tab keys="tab9" title="选项9"></i-tab>
        </i-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current: 'tab1',
                current_scroll: 'tab1'
            }
        },
        methods: {
            handleChange(key) {
                this.current = key
            },

            handleChangeScroll(key) {
                this.current_scroll = key
            }
        }
    }
</script>
```

#### API

##### Tabs props

| 属性    | 说明                    | 类型    | 默认值 |
|---------|-----------------------|---------|--------|
| i-class | 自定义 class 类名       | String  | -      |
| current | 当前所在的标签的 key 值 | String  | -      |
| color   | 主题色                  | String  | -      |
| scroll  | 是否开启横向滚动        | Boolean | false  |
| fixed   | 是否固定在底部          | Boolean | false  |

##### Tabs events

| 事件名 | 说明           | 返回值 |
|--------|--------------|--------|
| change | 切换标签时触发 | keys    |

##### Tab props

| 属性    | 说明              | 类型    | 默认值 |
|---------|-----------------|---------|--------|
| i-class | 自定义 class 类名 | String  | -      |
| keys    | 标签的唯一标识    | String  | -      |
| title   | 名称              | String  | -      |
| dot     | 是否显示小红点    | Boolean | false  |
| count   | 徽标数            | Number  | 0      |