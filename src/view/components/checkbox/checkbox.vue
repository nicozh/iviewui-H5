<template>

  <div :class="['i-checkbox']" @click.stop="checkboxChange(value)">
    <i-cell class="i-checkbox-cell">
      <label>
        <i-icon :class="['i-checkbox-radio', positionCls]" :color="changeColor()" :type="checked?'success_fill':'radio_off'" :size="24"></i-icon>
        <div class="i-checkbox-title">{{value}}</div>
      </label>
    </i-cell>
  </div>
</template>
<script>
import findParent from "../mixins/find-parent.js";
const prefixCls = "i-checkbox";
export default {
  name: "i-checkbox",
  mixins: [findParent],
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#2d8cf0"
    },
    position: {
      type: String,
      default: "left" //left right
    }
  },
  data() {
    return {
      positionCls: `${prefixCls}-checkbox-left`
    };
  },
  watch: {
    position() {
      this.setPosition();
    }
  },
  created() {
    this.setPosition();
    this.findParent("i-checkbox-group");
  },
  computed: {
    checked: {
      get() {
        return this.parent
          ? this.parent.value.indexOf(this.value) !== -1
          : this.value;
      },
      set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit("input", val);
        }
      }
    },
    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    }
  },
  methods: {
    changeColor() {
      if (this.checked && !this.disabled) {
        return "#2d8cf0";
      } else if (this.checked && this.disabled) {
        return "#999";
      } else {
        return "#ccc";
      }
    },
    changeCurrent(current) {
      this.setData({ checked: current });
    },
    setPosition() {
      this.positionCls =
        this.position.indexOf("left") !== -1
          ? `${prefixCls}-checkbox-left`
          : `${prefixCls}-checkbox-right`;
    },
    checkboxChange() {
      if (!this.disabled) {
        this.checked = !this.checked;
      }
    },
    setParentValue(val) {
      const { parent } = this;
      const value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        if (value.indexOf(this.value) === -1) {
          value.push(this.value);
          parent.$emit("input", value);
        }
      } else {
        const index = value.indexOf(this.value);
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit("input", value);
        }
      }
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-checkbox {
  &-cell {
    &::after {
      display: block;
    }
  }
  &-checkbox-left {
    float: left;
  }
  &-checkbox-right {
    float: right;
  }
  &-radio {
    vertical-align: middle;
  }
  &-title {
    display: inline-block;
    vertical-align: middle;
    line-height: 24px;
    margin-left: 8px;
  }
}
</style>
