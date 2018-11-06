# Page 分页
#### 概述
当数据量较多时，使用分页可以快速进行数据切换。
#### 使用指南
#### 示例
```
<template>
    <div>
        <i-panel title="带有文字的按钮"></i-panel>

        <i-page :current=" current " :total="5" @change="handleChange">
            <div slot="prev">Prev</div>
            <div slot="next">Next</div>
        </i-page>

        <i-panel title="带有文字和图标的按钮"></i-panel>

        <i-page :current=" current " :total="5" @change="handleChange">
            <div slot="prev">
                <i-icon type="return"></i-icon>
                上一步
            </div>
            <div slot="next">
                下一步
                <i-icon type="enter"></i-icon>
            </div>
        </i-page>

        <i-panel title="隐藏数字"></i-panel>

        <i-page :current=" current " :total="5" simple @change="handleChange">
            <div slot="prev">Prev</div>
            <div slot="next">Next</div>
        </i-page>

        <i-panel title="只显示数字"></i-panel>

        <i-page :current=" current " :total="5" mode="number" @change="handleChange"></i-page>

        <i-panel title="显示点"></i-panel>

        <i-page :current=" current " :total="5" mode="pointer" @change="handleChange"></i-page>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current: 1
            }
        },
        methods: {
            handleChange(type) {
                if (type === 'next') {
                    this.current = this.current + 1
                } else if (type === 'prev') {
                    this.current = this.current - 1
                }
            }
        }
    }
</script>
```
#### Api

| 属性    | 说明                                | 类型    | 默认值 |
|---------|-----------------------------------|---------|--------|
| i-class | 自定义 class 类名                   | String  | -      |
| mode    | 类型，可选值为 button、number、pointer | String  | button |
| current | 当前页码                            | Number  | 1      |
| total   | 总页数                              | Number  | 0      |
| simple  | 是否隐藏数值                        | Boolean | false  |

#### Events
| 事件名 | 说明                             | 返回值 |
|--------|--------------------------------|--------|
| change | 切换页码时触发，返回 prev 或 next | type   |
