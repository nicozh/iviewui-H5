<template>
    <div :class="[iClass, 'i-drawer', visible ? 'i-drawer-show' : '' , 'i-drawer-' +`${mode}`]">
        <div v-if="mask" class="i-drawer-mask" @click="handleMaskClick"></div>
        <div class="i-drawer-container">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            iClass: String,
            visible: {
                type: Boolean,
                default: false
            },

            mask: {
                type: Boolean,
                default: true
            },

            maskClosable: {
                type: Boolean,
                default: true
            },

            mode: {
                type: String,
                default: 'left' // left right
            }
        },
        data() {
            return {

            }
        },
        methods: {
            showcon() {
                console.log(111)
            },
            handleMaskClick() {
                if (!this.maskClosable) {
                    return;
                }
                this.$emit('close', {});
            }
        }
    }
</script>

<style lang="less">
    @import "../styles/_base.less";
    @import "../styles/_mixins.less";

    @drawer-prefix-cls: i-drawer;

    .@{drawer-prefix-cls} {
        visibility: hidden;

        &-show {
            visibility: visible;

            & .@{drawer-prefix-cls}-mask {
                display: block;
                opacity: 1;
            }

            & .@{drawer-prefix-cls}-container {
                opacity: 1;
            }

            &.@{drawer-prefix-cls}-left,
            &.@{drawer-prefix-cls}-right {
                & .@{drawer-prefix-cls}-container {
                    transform: translate3d(0, -50%, 0);
                }
            }
        }

        &-mask {
            //display: none;
            opacity: 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 6;
            background: rgba(0, 0, 0, 0.6);
            transition: all 0.3s ease-in-out;
        }

        &-container {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            transform-origin: center;
            transition: all 0.3s ease-in-out;
            z-index: 7;
            opacity: 0;
        }

        &-left {
            & .@{drawer-prefix-cls}-container {
                left: 0;
                top: 50%;
                transform: translate3d(-100%, -50%, 0);
            }
        }

        &-right {
            & .@{drawer-prefix-cls}-container {
                right: 0;
                top: 50%;
                left: auto;
                transform: translate3d(100%, -50%, 0);
            }
        }
    }
</style>