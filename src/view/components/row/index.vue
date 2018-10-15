<template>
    <div class="i-row">
        <slot></slot>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less">
    .i-row {
        &:after {
            content: "";
            display: table;
            clear: both;
        }
    }
</style>