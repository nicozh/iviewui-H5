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
      value: "navigateTo"
    },
    url: {
      type: String,
      value: ""
    }
  },
  data() {
    return {
      isLastCell: true
    };
  },
  methods: {
    navigateTo() {
      // console.log('点击跳转')
    }
  }
};
</script>
<style lang="less">
@import "./index.less";
</style>