<template>
    <div>
        <i-panel title="基本用法"></i-panel>

        <i-tabs v-model="current" @change="handleChange">
            <i-tab title="选项2"></i-tab>
            <i-tab title="选项3"></i-tab>
            <i-tab title="选项1"></i-tab>
        </i-tabs>

        <i-panel title="自定义主题色"></i-panel>

        <i-tabs v-model="current" color="#f759ab" @change="handleChange">
            <i-tab title="选项1"></i-tab>
            <i-tab title="选项2"></i-tab>
            <i-tab title="选项3"></i-tab>
        </i-tabs>

        <i-panel title="徽标"></i-panel>

        <i-tabs v-model="current" @change="handleChange">
            <i-tab title="选项1" :count="3"></i-tab>
            <i-tab title="选项2"></i-tab>
            <i-tab title="选项3" dot></i-tab>
        </i-tabs>

        <i-panel title="滚动"></i-panel>

        <i-tabs v-model="current_scroll" scroll @change="handleChangeScroll">
            <i-tab title="选项1"></i-tab>
            <i-tab title="选项2"></i-tab>
            <i-tab title="选项3"></i-tab>
            <i-tab title="选项4"></i-tab>
            <i-tab title="选项5"></i-tab>
            <i-tab title="选项6"></i-tab>
            <i-tab title="选项7"></i-tab>
            <i-tab title="选项8"></i-tab>
            <i-tab title="选项9"></i-tab>
        </i-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current: 0,
                current_scroll: 0
            }
        },
        methods: {
            handleChange(index) {
                console.log(this.current)
            },

            handleChangeScroll(index) {
                console.log(index)
            }
        }
    }
</script>