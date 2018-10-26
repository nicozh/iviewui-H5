# Steps 步骤条
#### 概述
拆分某项流程的步骤，引导用户按流程完成任务。
#### 使用指南
#### 示例
```
<template>
    <div>
        <div class="i-steps-demo">
            <div class="one-tag">基本用法</div>
            <i-steps>
                <i-step status="finish">
                    <div slot="title">
                        已完成
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step status="process">
                    <div slot="title">
                        进行中
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step status="">
                    <div slot="title">
                        错误
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
            </i-steps>

            <div class="one-tag">使用 icon 图标</div>
            <i-steps>
                <i-step status="finish" icon="barrage">
                    <div slot="title">
                        已完成
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step status="process" icon="brush">
                    <div slot="title">
                        进行中
                    </div>
                    <div slot="content" icon="camera">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step icon="collection">
                    <div slot="title">
                        错误
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
            </i-steps>

            <div class="one-tag">步骤进度</div>
            <i-steps :current="current">
                <i-step>
                    <div slot="title">
                        已完成
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step>
                    <div slot="title">
                        进行中
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step>
                    <div slot="title">
                        错误
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
            </i-steps>
            <i-button @click="handleClick">下一步</i-button>

            <div class="one-tag">垂直方向</div>
            <i-steps :current="verticalCurrent" direction="vertical">
                <i-step>
                    <div slot="title">
                        已完成
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step>
                    <div slot="title">
                        进行中
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
                <i-step>
                    <div slot="title">
                        错误
                    </div>
                    <div slot="content">
                        这里是该步骤的描述信息
                    </div>
                </i-step>
            </i-steps>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                // data: {
                    current: 2,
                    verticalCurrent: 2
                // }
            }
        },
        methods: {
            handleClick() {
                const addCurrent = this.current + 1;
                const current = addCurrent > 2 ? 0 : addCurrent;
                this.current = current
                console.log(this.current)
            }
        }
    }
</script>

<style lang="less">
    .i-steps-demo {
        margin: 20px 10px;
    }

    .one-tag {
        font-size: 14px;
        margin: 30px 5px 20px 0;
    }
</style>
```
#### API
##### Steps props

| 属性      | 说明                                                    | 类型   | 默认值     |
|-----------|-------------------------------------------------------|--------|------------|
| i-class   | 自定义 class 类名                                       | String | -          |
| current   | 当前步骤，从 0 开始计数                                  | Number | -1         |
| status    | 当前步骤的状态，可选值为 wait、process、finish、error       | String | -          |
| direction | 步骤条的方向，可选值为 horizontal（水平）或 vertical（垂直） | String | horizontal |

##### Step props
| 属性    | 说明                                                           | 类型   | 默认值 |
|---------|--------------------------------------------------------------|--------|--------|
| i-class | 自定义 class 类名                                              | String | -      |
| status  | 步骤的状态，可选值为 wait、process、finish、error，不设置时自动判断 | String | -      |
| title   | 标题                                                           | String | -      |
| content | 步骤的详细描述，可选                                            | String | -      |
| icon    | 步骤的图标，可选                                                | String | -      |