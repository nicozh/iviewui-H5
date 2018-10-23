# Drawer 抽屉
#### 示例
```
<template>
    <div class="demo">
        <i-button @click="toggleLeft1" type="ghost">左边弹出1</i-button>
        <i-button @click="toggleLeft2" type="primary">左边弹出2</i-button>
        <i-button @click="toggleRight1" type="ghost">右边弹出1</i-button>
        <i-button @click="toggleRight2" type="primary">右边弹出2</i-button>
        <i-drawer mode="left" :visible="showLeft1" @close="toggleLeft1">
            <div class="demo-container">
                单击遮罩层关闭
            </div>
        </i-drawer>
        <i-drawer mode="left" :visible="showLeft2" :mask-closable="false">
            <div class="demo-container">
                禁止单击遮罩关闭
                <i-button @click="toggleLeft2" type="primary">关闭</i-button>
            </div>
        </i-drawer>
        <i-drawer mode="right" :visible="showRight1" @close="toggleRight1">
            <div class="demo-container">
                单击遮罩层关闭
            </div>
        </i-drawer>
        <i-drawer mode="right" :visible="showRight2" :mask-closable="false">
            <div class="demo-container">
                禁止单击遮罩关闭
                <i-button @click="toggleRight2" type="primary">关闭</i-button>
            </div>
        </i-drawer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showLeft1: false,
                showLeft2: false,
                showRight1: false,
                showRight2: false,
            }
        },

        methods: {
            toggleLeft1() {
                this.showLeft1 = !this.showLeft1
            },
            toggleLeft2() {
                this.showLeft2 = !this.showLeft2
            },
            toggleRight1() {
                this.showRight1 = !this.showRight1
            },
            toggleRight2() {
                this.showRight2 = !this.showRight2
            }
        }
    }
</script>

<style lang="less">
    .demo-container {
        width: 50vw;
        height: 100vh;
        background: #fff;
    }
</style>
```

#### API
| 属性          | 说明                            | 类型    | 默认值 |
|---------------|-------------------------------|---------|--------|
| i-class       | 自定义 class 类名               | String  | -      |
| visible       | 是否显示组件                    | String  | -      |
| mode          | 显示位置，可选值为 left 和 right | String  | left   |
| mask          | 是否显示遮罩层                  | Boolean | true   |
| mask-closable | 是否允许点击遮罩层关闭          | Boolean | true   |
