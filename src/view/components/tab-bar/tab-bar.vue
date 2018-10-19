<template>
    <div :class="['i-tab-bar' , fixed ? 'i-tab-bar-fixed' : '' ]">
        <slot></slot>
        <!-- <div class="i-tab-bar-list">
            <div @click="clickChild(index)" class="i-tab-bar-layer" v-for="(item,index) in list " :key="index"
                :data-key="item.value" :style="{width: 100 / list.length + '%'}">
            </div>
        </div> -->
    </div>
</template>
<script>
    export default {
        props: {
            value: Number,
            fixed: {
                type: Boolean,
                default: false,
            },
            current: String,
            color: String
        },
        data() {
            return {
                list: [],
                // width: 100 / this.list.length * 100%
            }
        },

        watch: {
            list() {
                this.setActiveItem()
            },
            value() {
                this.setActiveItem()
            }
        },

        methods: {
            setActiveItem() {
                this.list.forEach((item, index) => {
                    item.current = index === this.value;
                    item.changeCurrentColor(this.color);
                });
            },
            onChange(active) {
                if (active !== this.value) {
                    this.$emit('input', active);
                    this.$emit('change', active);
                }
            },
        },
    }
</script>
<style lang="less">
    @import "../styles/_base.less";
    @import "../styles/_mixins.less";

    .i-tab-bar {
        display: flex;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        position: relative;
        justify-content: space-around;
        align-items: center;
        -webkit-box-align: center;
        background: #fff;

        &::after {
            .hairline();
            border-top-width: 1px;
        }

        &-fixed {
            position: fixed;
            bottom: 0;
            z-index: 2;
        }

        &-list {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        &-layer {
            display: block;
            float: left;
            height: 100%;
        }
    }
</style>