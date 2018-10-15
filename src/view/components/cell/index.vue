<template>
    <div @click="navigateTo" :class="['i-cell' ,isLastCell ? 'i-cell-last' : ''  ,isLink ? 'i-cell-access' : '' ]">
        <div class="i-cell-icon">
            <slot name="icon"></slot>
        </div>
        <div class="i-cell-bd">
            <div v-if="title" class="i-cell-text">{{ title }}</div>
            <div v-if="label" class="i-cell-desc">{{ label }}</div>
            <slot></slot>
        </div>
        <div class="i-cell-ft">
            <div v-if="value">{{ value }}</div>
            <div v-else>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        props: {
            // 左侧标题
            title: {
                type: String
            },
            // 标题下方的描述信息
            label: {
                type: String
            },
            // 右侧内容
            value: {
                type: String
            },
            // 只有点击 footer 区域才触发 tab 事件
            onlyTapFooter: {
                type: Boolean
            },
            // 是否展示右侧箭头并开启尝试以 url 跳转
            isLink: {
                type: Boolean,
                default: false
            },
            // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
            linkType: {
                type: String,
                value: 'navigateTo'
            },
            url: {
                type: String,
                value: ''
            },
        },
        data() {
            return {
                isLastCell: true
            }
        },
        methods: {
            navigateTo() {
                console.log('点击跳转')
            },
        }
    }
</script>
<style lang="less">
    @import "../styles/_base.less";
    @import "../styles/_mixins.less";

    .i-cell {
        position: relative;
        padding: 12px 15px;
        display: flex;
        background: #fff;
        align-items: center;
        line-height: 1.4;
        font-size: @size-font-base;
        overflow: hidden;

        &::after {
            .hairline();
            border-bottom-width: 1px;
            left: 15px;
            right: 0;
        }

        &-last::after {
            display: none;
        }

        &-icon {
            margin-right: 5px;

            &:empty {
                display: none
            }
        }

        &-bd {
            flex: 1;
        }

        &-text {
            line-height: 24px;
            font-size: @size-font-base;
        }

        &-desc {
            line-height: 1.2;
            font-size: @size-font-small;
            color: @subsidiary-color;
        }

        &-ft {
            position: relative;
            text-align: right;
            color: @text-color;
        }

        &-access &-ft {
            padding-right: 13px;

            &::after {
                content: " ";
                display: inline-block;
                width: 6px;
                height: 6px;
                position: absolute;
                top: 50%;
                right: 2px;
                border-width: 2px 2px 0 0;
                border-color: @border-color-base;
                border-style: solid;
                transform: translateY(-50%) matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            }
        }


    }
</style>