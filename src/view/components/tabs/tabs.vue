<template>
  <div :class="allClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "i-tabs",
  model: {
    prop: "current",
    event: "change"
  },
  props: {
    current: {
      type: [String, Number],
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    scroll: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: []
    };
  },
  computed: {
    allClass() {
      let a = [];
      if (this.scroll) {
        a = ["i-tabs", "i-tabs-scroll", this.fixed ? "i-tabs-fixed" : ""];
      } else {
        a = ["i-tabs", this.fixed ? "i-tabs-fixed" : ""];
      }
      return a;
    }
  },
  methods: {
    changeCurrent(val = +this.current) {
      let items = this.tabs;
      const len = items.length;
      if (len > 0) {
        items.forEach(item => {
          item.changeScroll(this.scroll);
          item.changeCurrent(item.index === val);
          item.changeCurrentColor(this.color);
        });
      }
    },
    emitEvent(index) {
      this.$emit("change", index);
    }
  },
  watch: {
    current: function() {
      this.changeCurrent();
    }
  },
  mounted() {
    this.changeCurrent();
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-tabs {
  display: flex;
  width: 100%;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  position: relative;
  justify-content: space-around;
  align-items: center;
  -webkit-box-align: center;
  background: #fff;

  &::after {
    .hairline();
    border-bottom-width: 1px;
  }

  &-scroll {
    overflow: hidden;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  &-fixed {
    position: fixed;
    top: 0;
    z-index: 2;
  }
}
</style>