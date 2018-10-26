<template>
    <div :class="['i-grid',iClass]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            iClass: String
        },
        data() {
            return {
                width: ''
            }
        },
        watch: {
            width: function () {
                this.setGridItemWidth()
            }
        },
        methods: {
            setGridItemWidth() {
                const nodes = this.$children
                this.width = 100 / nodes.length;
                nodes.forEach(item => {
                    item.width = this.width + '%'
                });
            }
        },
        mounted() {
            this.setGridItemWidth();
        }
    }
</script>
<style lang="less">
    @import "../styles/_base.less";

    .i-grid {
        border-top: 1px solid @border-color-split;
        border-left: 1px solid @border-color-split;
        overflow: hidden;
    }
</style>