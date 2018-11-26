<template>
  <div :class="[iClass, 'i-rate']" @touchmove="handleTouchMove">
    <div v-for="(item,index) in count" :key="item" :class="['i-rate-star', getCurrent(value,index)]" @click="handleClick(index)">
      <i-icon type="collection_fill" :size="size" :data-index="index"></i-icon>
    </div>
    <div class="i-rate-text" v-if="value !== 0">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/index";
export default {
  name: "i-rate",
  components: { [Icon.name]: Icon },
  props: {
    iClass: String,
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      touchesStart: {
        pageX: 0
      }
    };
  },
  methods: {
    getCurrent: function(value, index) {
      let prefixCls = "i-rate";
      if (index < value) {
        return prefixCls + "-current";
      }
    },
    handleClick(index) {
      if (this.disabled) {
        return;
      }
      this.$emit("input", index + 1);
      this.$emit("change", index + 1);
    },
    handleTouchMove(event) {
      const data = this.data;
      if (this.disabled) {
        return;
      }

      if (!document.elementFromPoint) {
        return;
      }
      event.preventDefault();
      const { clientX, clientY } = event.touches[0];
      const target = document.elementFromPoint(clientX, clientY);
      if (target) {
        const { index } = target.dataset;
        if (index) {
          this.handleClick(+index);
        }
      }
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

@rate-prefix-cls: ~"i-rate";

.@{rate-prefix-cls} {
  margin: 0;
  padding: 0;
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
  font-weight: normal;
  font-style: normal;
  &-hide-input {
    display: none;
  }
  &-star {
    display: inline-block;
    color: #e9e9e9;
  }
  &-current {
    color: #f5a623;
  }
  &-text {
    display: inline-block;
    vertical-align: middle;
    margin-left: 6px;
    font-size: @size-font-base;
  }
}
</style>
