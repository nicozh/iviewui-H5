<template>
  <div :class="['i-collapse-item']">
    <div class="i-collapse-item-title-wrap" @click="trigger">
      <i-icon :size="16" type="enter" :class="data.showContent ? 'i-collapse-item-arrow-show' : 'i-collapse-item-arrow' " />
      <span :class="['i-collapse-item-title', iClassTitle]">{{title}}</span>
    </div>
    <div :class="['i-collapse-item-content', data.showContent, iClassContent]">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/index";
import findParent from '../mixins/find-parent.js'
export default {
  name: "i-collapse-item",
  mixins: [findParent],
  components: { [Icon.name]: Icon },
  props: {
    iClassTitle: String,
    iClassContent: String,
    title: String,
    name: String
  },
  data() {
    return {
      data: {
        showContent: "",
        accordion: false
      }
    };
  },
  computed: {
    items() {
      return this.parent.allList;
    },
    index() {
      return this.items.indexOf(this);
    },
  },
  methods: {
    trigger(e) {
      if (this.parent.accordion) {
        this.parent.clickfn(this.name);
      } else {
        this.data.showContent = this.data.showContent
          ? ""
          : "i-collapse-item-show-content";
      }
    }
  },
  created(){
    this.findParent('i-collapse')
  },
  mounted() {
    this.parent.allList.push(this)
    this.parent.name === this.name
      ? (this.data.showContent = "i-collapse-item-show-content")
      : "";
  },
  destroyed() {
    this.items.splice(this.index, 1);
  },
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-collapse-item {
  padding: 2px 8px;
  border-top: 1px solid @border-color-base;

  &-title {
    vertical-align: middle;
    &-wrap {
      padding: 2px 0 0;
    }
  }

  &-content {
    padding: 6px;
    display: none;
  }

  &-show-content {
    display: block;
  }

  &-arrow {
    transition: transform @transition-time @ease-in-out;
    &-show {
      transition: transform @transition-time @ease-in-out;
      transform: rotate(90deg);
    }
  }
}
</style>


