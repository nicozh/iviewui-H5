<template>
    <div class="i-grid">
        <slot></slot>
    </div>
</template>
<script>
    export default {

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