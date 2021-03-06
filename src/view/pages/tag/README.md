# Tag 标签

#### 概述

对不同维度进行简单的标记和分类。

#### 使用指南

#### 示例

```html
<template>
    <div class="tag-example">
        <div class="one-tag">基本用法</div>
        <i-tag>标签一</i-tag>
        <div class="one-tag">设置边框配置</div>
        <i-tag class="i-tags" name="标签一" type="border" color="red">
            标签一
        </i-tag>
        <i-tag class="i-tags" name="标签一" color="green" type="border">
            标签一
        </i-tag>
        <div class="one-tag">各种颜色配置</div>
        <i-tag class="i-tags" name="单个标签">
            标签一
        </i-tag>
        <i-tag class="i-tags" name="单个标签" color="red">
            标签一
        </i-tag>
        <i-tag class="i-tags" name="标签一" color="green">
            标签一
        </i-tag>
        <i-tag class="i-tags" name="标签一" color="blue">
            标签一
        </i-tag>
        <i-tag class="i-tags" name="标签一" color="yellow">
            标签一
        </i-tag>
        <div class="one-tag">多个标签</div>
        <i-tag v-for="(item,index) in tags" :key="index" @change="onChange" :checkable="true" :name="index+''" :color="item.color"
            style="margin-right:5px" :checked="item.checked" type="border">
            {{item.name}}
        </i-tag>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                oneChecked: false,
                tags: [{
                        name: '标签一',
                        checked: false,
                        color: 'default'
                    },
                    {
                        name: '标签二',
                        checked: false,
                        color: 'red'
                    },
                    {
                        name: '标签三',
                        checked: true,
                        color: 'blue'
                    },
                    {
                        name: '标签4️',
                        checked: true,
                        color: 'green'
                    }
                ]
            }
        },
        methods: {
            oneChange(event) {
                this.oneChecked = event.checked
            },
            onChange(event) {
                let {name, checked} = event
                this.tags[name].checked = checked
            }
        }
    }
</script>

<style lang="less">
    .tag-example {
        padding: 10px;
    }

    .one-tag {
        font-size: 14px;
        margin: 20px 5px 5px 0;
    }

    .i-tags {
        margin: 10px 5px 0 0;
    }
</style>
```

#### API

##### Tag props

| 属性      | 说明                                                                      | 类型    | 默认值  |
|-----------|-------------------------------------------------------------------------|---------|---------|
| checkable | 标签是否可以选择                                                          | Boolean | false   |
| name      | 当前标签的名称                                                            | String  | -       |
| checked   | 标签的选中状态                                                            | Boolean | true    |
| type      | 标签的样式类型，可选值为 border、dot                                        | String  | dot     |
| color     | 标签颜色，预设颜色值为 blue、green、red、yellow、default，你也可以自定义颜色值。 | String  | default |

##### Tag events

| 事件名 | 说明           | 返回值            |
|--------|--------------|-------------------|
| change | 状态改变时触发 | { name, checked } |