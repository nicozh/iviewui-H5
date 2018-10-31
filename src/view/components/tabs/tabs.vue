<template>
  <div>
    <div v-if="scroll" :class="[iClass, 'i-tabs', 'i-tabs-scroll', fixed ? 'i-tabs-fixed' : '']">
      <slot></slot>
    </div>
    <div v-else :class="[iClass, 'i-tabs', fixed ? 'i-tabs-fixed' : '']">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      iClass: String,
      current: {
        type: String,
        default: ""
        //   observer: "changeCurrent"
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
      return {};
    },
    methods: {
      changeCurrent(val = this.current) {
        let items = this.$children;
        const len = items.length;

        if (len > 0) {
          items.forEach(item => {
            item.changeScroll(this.scroll);
            item.changeCurrent(item.keys === val);
            item.changeCurrentColor(this.color);
          });
        }
      },
      emitEvent(key) {
        this.$emit("change", key);
      }
    },
    watch: {
      current: function () {
        this.changeCurrent();
      }
    },
    mounted() {
      this.changeCurrent()
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