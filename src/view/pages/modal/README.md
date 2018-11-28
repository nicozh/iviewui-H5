# Modal 对话框

#### 概述

模态对话框，在浮层中显示，引导用户进行相关操作。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <div style="margin-top: 100px;">
            <i-button @click="handleOpen1">普通对话框</i-button>
            <i-button @click="handleOpen2">无标题对话框</i-button>
            <i-button @click="handleOpen3">自定义按钮对话框</i-button>
            <i-button @click="handleOpen4">纵向按钮，自定义颜色及图标</i-button>
            <i-button @click="handleOpen5">异步操作</i-button>
        </div>

        <i-modal title="标题" :visible="visible1" @ok="handleClose1" @cancel="handleClose1">
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
            <p>一些文本</p>
        </i-modal>

        <i-modal :visible="visible2" @ok="handleClose2" @cancel="handleClose2">
            <p>这是一个无标题的对话框</p>
        </i-modal>

        <i-modal title="支付" :visible="visible3" :actions="actions3" @click="handleClick3">
            <p>请选择支付方式</p>
        </i-modal>

        <i-modal title="纵向排列的按钮" :visible="visible4" :actions="actions4" action-mode="vertical" @click="handleClick4">

        </i-modal>

        <i-modal title="删除确认" :visible="visible5" :actions="actions5" @click="handleClick5">
            <p>删除后无法恢复哦</p>
        </i-modal>

        <!-- <i-message id="message" /> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // data: {
                    visible1: false,
                    visible2: false,
                    visible3: false,
                    visible4: false,
                    visible5: false,
                    actions3: [{
                            name: '现金支付',
                            color: '#2d8cf0',
                        },
                        {
                            name: '微信支付',
                            color: '#19be6b'
                        },
                        {
                            name: '取消'
                        }
                    ],
                    actions4: [{
                            name: '按钮1'
                        },
                        {
                            name: '按钮2',
                            color: '#ff9900'
                        },
                        {
                            name: '按钮3',
                            icon: 'search'
                        }
                    ],
                    actions5: [{
                            name: '取消'
                        },
                        {
                            name: '删除',
                            color: '#ed3f14',
                            loading: false
                        }
                    ]
                // },
            }
        },
        methods: {
            handleOpen1() {
                this.visible1 = true
            },

            handleClose1() {
                this.visible1 = false
            },

            handleOpen2() {
                this.visible2 = true

            },

            handleClose2() {
                this.visible2 = false
            },

            handleOpen3() {
                this.visible3 = true
            },

            handleClick3(index) {
                if (index === 0) {
                    this.$Message({
                        content: '点击了现金支付'
                    });
                } else if (index === 1) {
                    this.$Message({
                        content: '点击了微信支付'
                    });
                }
                this.visible3 = false
            },

            handleOpen4() {
                this.visible4 = true
            },

            handleClick4() {
                this.visible4 = false
            },

            handleOpen5() {
                this.visible5 = true
            },

            handleClick5(index) {
                if (index === 0) {
                    this.visible5 = false
                } else {
                    const action = [...this.actions5];
                    action[1].loading = true;

                    this.actions5 = action

                    setTimeout(() => {
                        action[1].loading = false;
                        this.visible5 = false
                        this.actions5 = action
                        this.$Message({
                            content: '删除成功！',
                            type: 'success'
                        });
                    }, 2000);
                }
            }
        }
    }
</script>
```

#### API

##### Modal props

| 属性        | 说明                                                                  | 类型    | 默认值     |
|-------------|---------------------------------------------------------------------|---------|------------|
| visible     | 是否显示组件                                                          | Boolean | false      |
| title       | 标题                                                                  | String  | -          |
| show-ok     | 是否显示确定按钮                                                      | Boolean | true       |
| show-cancel | 是否显示取消按钮                                                      | Boolean | true       |
| ok-text     | 确定按钮的文案                                                        | String  | 确定       |
| cancel-text | 取消按钮的文案                                                        | String  | 取消       |
| actions     | 按钮组，具体项参照后面的表格，设置此值后，则默认的确定和取消按钮不予显示 | Array   | []         |
| action-mode | 按钮的排列方向，可选值为 horizontal 或 vertical                        | String  | horizontal |

##### Modal events

| 属性   | 说明                                             | 返回值 |
|--------|------------------------------------------------|--------|
| click  | 点击某个按钮时触发，返回按钮所在 actions 中的索引 | index  |
| ok     | 点击确定按钮时触发                               | -      |
| cancel | 点击取消按钮时触发                               | -      |

##### Modal actions

| 属性    | 说明                 | 类型    | 默认值 |
|---------|--------------------|---------|--------|
| name    | 按钮文案             | String  | -      |
| icon    | 按钮图标             | String  | -      |
| color   | 按钮文字的颜色       | String  | -      |
| loading | 按钮是否显示为加载中 | Boolean | false  |
