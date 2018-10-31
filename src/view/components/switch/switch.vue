<template>
    <div :class="['i-class', 'i-switch', setSize(size), setCurrent(value,disabled)]" @click="toggle">
        <!-- <input type="text" :name="name" :value="value" class="i-switch-hide-input"> -->
        <div class="i-switch-inner" v-if="value === true">
            <slot name="open"></slot>
        </div>
        <div class="i-switch-inner" v-else>
            <slot name="close"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            },
            //large small default
            size: {
                type: String,
                default: 'default'
            },
            // is or not disable
            disabled: {
                type: Boolean,
                default: false
            },
            // hidden inut name
            name: {
                type: String,
                default: ''
            }
        },
        data() {
            var sizes = ['large', 'default'];
            var prefixCls = 'i-switch';
            return {
                sizes,
                prefixCls
            }
        },
        methods: {
            toggle() {
                if (this.disabled) return;
                const value = this.value ? false : true;
                this.$emit('change',value)
            },
            setSize(size) {
                let index = this.sizes.indexOf(size);
                return this.prefixCls + (index > -1 ? ('-' + size) : 'default')
            },
            setCurrent(value, disabled) {
                let className = value && !disabled ? this.prefixCls + '-checked' : '';
                if (disabled) {
                    className += ' ' + this.prefixCls + '-disabled';
                }
                return className;
            }
        }
    }
</script>
<style lang="less">
    @import "../styles/_base.less";
    @import "../styles/_mixins.less";
    @switch-prefix-cls: ~"i-switch";

    .@{switch-prefix-cls} {
        display: inline-block;
        width: 48px;
        height: 24px;
        line-height: 24px;
        border-radius: 24px;
        vertical-align: middle;
        border: 1px solid #ccc;
        background-color: #ccc;
        position: relative;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: all @transition-time @ease-in-out;

        &-hide-input {
            display: none;
            opacity: 0;
        }

        &-inner {
            color: #fff;
            font-size: 12px;
            position: absolute;
            left: 25px;
            vertical-align: middle;

            .i-icon {
                width: 12px;
                height: 12px;
                text-align: center;
                vertical-align: middle;
            }
        }

        &:after {
            content: '';
            width: 22px;
            height: 22px;
            border-radius: 22px;
            background-color: #fff;
            position: absolute;
            left: 1px;
            top: 1px;
            cursor: pointer;
            transition: left @transition-time @ease-in-out, width @transition-time @ease-in-out;
        }


        &-checked:after {
            left: 8px;
        }

        &-large {
            width: 60px;
        }


        &-large&-checked:after {
            left: 37px;
        }

        &-checked:after {
            left: 25px;
        }

        &-checked {
            border-color: @primary-color;
            background-color: @primary-color;

            .@{switch-prefix-cls}-inner {
                left: 8px;
            }

            &:after {
                left: 25px;
            }
        }

        &-disabled {
            background: #f3f3f3;
            border-color: #f3f3f3;

            &:after {
                background: #ccc;
                cursor: not-allowed;
            }

            .@{switch-prefix-cls}-inner {
                color: #ccc;
            }
        }
    }
</style>