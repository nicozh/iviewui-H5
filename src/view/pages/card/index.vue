<template>
    <div>
        <p style="margin: 16px">默认</p>
        <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
            <p slot="content">内容不错</p>
            <p slot="footer">尾部内容</p>
        </i-card>

        <p style="margin: 16px">通栏</p>
        <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
            <p slot="content">内容不错</p>
            <p slot="footer">尾部内容</p>
        </i-card>

        <p style="margin: 16px">自定义图片样式</p>
        <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg" class="card-demo">
            <p slot="content">内容不错</p>
            <p slot="footer">尾部内容</p>
        </i-card>
    </div>
</template>
<style lang="less">
    .card-demo img {
        border-radius: 50%;
    }
</style>