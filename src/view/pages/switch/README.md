# Switch 开关

#### 概述

在两种状态间切换时用到的开关选择器。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-cell-group>
            <i-cell title="基本用法">
                <i-switch v-model="switch1" @change="onChange" slot="footer"></i-switch>
            </i-cell>
            <i-cell title="自定义内容">
                <i-switch v-model="switch1" size="large" @change="onChange" slot="footer">
                    <div slot="open">开启</div>
                    <div slot="close">关闭</div>
                </i-switch>
            </i-cell>
            <i-cell title="图标">
                <i-switch v-model="switch1" @change="onChange" slot="footer">
                    <i-icon type="right" slot="open"></i-icon>
                    <i-icon type="close" slot="close"></i-icon>
                </i-switch>
            </i-cell>
            <i-cell title="禁止切换">
                <i-switch v-model="switch1" :disabled="true" slot="footer"></i-switch>
            </i-cell>
        </i-cell-group>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                switch1: false
            }
        },
        methods: {
            onChange(value) {
                console.log(value)
            }
        }
    }
</script>
```

#### API

##### Switch props

| 属性     | 说明                                              | 类型    | 默认值  |
|----------|-------------------------------------------------|---------|---------|
| v-model    | 指定当前是否选中                                  | Boolean | false   |
| size     | 开关的尺寸，可选值为 large、small、default 或者不写。 | String  | default |
| disabled | 是否禁用开关                                      | Boolean | false   |

##### Switch events

| 事件名 | 说明                          | 返回值 |
|--------|-----------------------------|--------|
| change | 开关变化时触发，返回当前的状态 | value  |

##### Switch slot

| 事件名 | 说明                   |
|--------|----------------------|
| open   | 自定义显示打开时的内容 |
| close  | 自定义显示关闭时的内容 |