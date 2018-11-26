<template>
  <div :class="[iClass, 'i-radio']" @click.stop="radioChange">
    <i-cell i-class="i-radio-cell">
      <label>
        <i-icon size="24" :color="changeColor()" :type="currentValue === value?'success_fill':'radio_off'" :class="['i-radio-radio',positionCls]"></i-icon>
        <input style="display:none" v-model="currentValue" type="radio" :value="value" :disabled="disabled" :class="['i-radio-radio',positionCls]">
        <div class="i-radio-title">{{value}}</div>
      </label>
    </i-cell>
  </div>
</template>
<script>
import findParent from "../mixins/find-parent.js";
import iCell from "../list/cell";
const prefixCls = "i-radio";
export default {
  components: { [iCell.name]: iCell },
  name: "i-radio",
  mixins: [findParent],
  props: {
    iClass: String,
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
      positionCls: `${prefixCls}-radio-left`
    };
  },
  watch: {
    position: function() {
      this.setPosition();
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },
      set(val) {
        (this.parent || this).$emit("input", val);
      }
    }
  },
  created() {
    this.setPosition();
    this.findParent("i-radio-group");
  },
  methods: {
    radioChange() {
      if (this.disabled) return;
      this.currentValue = this.value;
    },
    setPosition() {
      this.positionCls =
        this.position.indexOf("left") !== -1
          ? `${prefixCls}-radio-left`
          : `${prefixCls}-radio-right`;
    },
    changeColor() {
      if (this.value === this.currentValue && !this.disabled) {
        return this.color;
      } else if (this.value === this.currentValue && this.disabled) {
        return "#999";
      } else {
        return "#ccc";
      }
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-radio {
  &-cell {
    &::after {
      display: block;
    }
  }
  &-radio-left {
    float: left;
  }
  &-radio-right {
    float: right;
  }
  &-radio {
    vertical-align: middle;
  }
  &-title {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
    line-height: 24px;
  }
}
</style>
