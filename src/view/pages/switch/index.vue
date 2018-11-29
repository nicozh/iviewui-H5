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