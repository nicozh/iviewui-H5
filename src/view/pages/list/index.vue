<template>
    <div>
        <i-cell-group>
            <i-cell title="只显示箭头" is-link></i-cell>
            <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
            <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
            <i-cell title="开关" value="详细内容" label="这里是描述">
                <!-- <switch slot="footer" checked /> -->
            </i-cell>
        </i-cell-group>
    </div>
</template>