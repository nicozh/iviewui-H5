<template>
  <div :class="[iClass, 'i-tabs-tab', scroll ? 'i-tabs-tab-scroll' : '', current ? 'i-tabs-tab-current' : '']">
    <i-badge :dot="dot" :count="dot ? 0 : count">
      <div @click="handleClickItem">
        <div :class="['i-tabs-tab-title', current ? 'i-tabs-tab-title-current' : '']" v-if="current && currentColor" :style="{color:currentColor}">{{ title }}</div>
        <div :class="['i-tabs-tab-title', current ? 'i-tabs-tab-title-current' : '']" v-else>{{ title }}</div>
      </div>
    </i-badge>
    <div class="i-tabs-tab-bar" v-if="current" :style="{background:currentColor}"></div>
  </div>
</template>
<script>
import Badge from "../badge/badge";
export default {
  name: "i-tab",
  components: { [Badge.name]: Badge },
  props: {
    iClass: String,
    keys: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    dot: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },
  data() {
    return {
      current: false,
      currentColor: "",
      scroll: false
    };
  },
  methods: {
    changeCurrent(current) {
      this.current = current;
    },
    changeCurrentColor(currentColor) {
      this.currentColor = currentColor;
    },
    changeScroll(scroll) {
      this.scroll = scroll;
    },
    handleClickItem() {
      const parent = this.$parent;
      parent.emitEvent(this.keys);
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-tabs-tab {
  flex: 1;
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  text-align: center;
  position: relative;
  height: 100%; //

  &-bar {
    display: block;
    width: 100%;
    height: 2px;
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    background: @primary-color;
  }

  &-title {
    font-size: @size-font-base;
    text-align: center;
    box-sizing: border-box;
    color: @subsidiary-color;

    &-current {
      color: @primary-color;
    }
  }

  &-scroll {
    display: inline-block;
    width: 60px;
  }
}
</style>