<template>
  <div @click="handleTap" :class="['i-cell' ,isLastCell ? 'i-cell-last' : ''  ,isLink ? 'i-cell-access' : '' ]">
    <div class="i-cell-icon">
      <slot name="icon"></slot>
    </div>
    <div class="i-cell-bd">
      <div v-if="title" class="i-cell-text">{{ title }}</div>
      <div v-if="label" class="i-cell-desc">{{ label }}</div>
      <slot></slot>
    </div>
    <div @click.stop="navigateTo" class="i-cell-ft">
      <div v-if="value">{{ value }}</div>
      <div v-else>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>

</template>
<script>
import findParent from "../mixins/find-parent.js";

export default {
  name: "i-cell",
  mixins: [findParent],
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
      const url = this.url;
      this.$emit("click", {});
      if (!this.isLink || !url || url === "true" || url === "false") return;
      location.href = url;
    },
    handleTap() {
      if (!this.onlyTapFooter) {
        this.navigateTo();
      }
    },
    updateIsLastCell(isLastCell) {
      this.isLastCell = isLastCell;
    }
  },
  created() {
    this.findParent("i-cell-group");
    this.parent ? this.parent.list.push(this) : "";
    // this.parent._updateIsLastCell() : "";
  }
};
</script>
<style lang="less">
@import "./index.less";
</style>