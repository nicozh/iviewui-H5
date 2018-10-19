<template>
    <div class="i-panel">
        <div v-if="title" :class="['i-panel-title' ,hideTop ? 'i-panel-title-hide-top' : '']">{{ title }}</div>
        <div :class="['i-panel-content' ,hideBorder ? 'i-panel-without-border' : '']">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            // 标题顶部距离
            hideTop: {
                type: Boolean,
                default: false
            },
            hideBorder: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="less">
    @import "../styles/_base.less";
    @import "../styles/_mixins.less";

    .i-panel {
        position: relative;
        overflow: hidden;

        &-title {
            font-size: @size-font-base;
            line-height: 1;
            color: @title-color;
            padding: 20px 16px 10px;

            &-hide-top {
                padding-top: 0;
            }
        }

        &-content {
            position: relative;
            background: #fff;
            overflow: hidden;

            &::after {
                .hairline();
                border-top-width: 1px;
                border-bottom-width: 1px;
            }
        }

        &-without-border {
            &::after {
                border: 0 none;
            }
        }
    }
</style>