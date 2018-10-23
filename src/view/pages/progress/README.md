# Progress 进度条
展示操作或任务的当前进度，比如上传文件。
#### 使用指南
#### 示例
```
<template>
    <div>
        <div class="progress-item">
            <i-progress :percent="25"></i-progress>
            <i-progress :percent="45" status="active"></i-progress>
            <i-progress :percent="65" status="wrong"></i-progress>
            <i-progress :percent="100" status="success"></i-progress>
            <i-progress :percent="25" hide-info :stroke-width="15"></i-progress>
        </div>
        <div class="progress-item">
            <i-progress :percent="percent" :status="status"></i-progress>

        </div>
        <i-button @click="handleAdd" type="ghost">增加</i-button>
        <i-button @click="handleReduce" type="ghost">减少</i-button>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                percent: 0,
                status: 'normal'
            }
        },
        methods: {
            handleAdd() {
                if (this.percent === 100) return;
                this.percent = this.percent + 10
                if (this.percent === 100) {
                    this.status = 'success'
                }
            },
            handleReduce() {
                if (this.percent === 0) return;
                this.percent = this.percent - 10
                this.status = 'normal'
            }
        }
    }
</script>

<style lang="less">
    .progress-item {
        padding: 12px;
    }
</style>
```
#### API

| 属性         | 说明                                      | 类型    | 默认值 |
|--------------|-----------------------------------------|---------|--------|
| percent      | 百分比                                    | Number  | 0      |
| status       | 状态，可选值为 normal、active、wrong、success | String  | normal |
| stroke-width | 进度条的线宽，单位 px                      | Number  | 10     |
| hide-info    | 隐藏数值或状态图标                        | Boolean | false  |
