<template>
    <div :class="[iClass, 'i-radio']" @click.stop="radioChange">
        <i-cell i-class="i-radio-cell">
            <label>
                <input v-model="currentValue" type="radio" :value="value" :checked="checked" :disabled="disabled" :class="['i-radio-radio',positionCls]" :style="{color:checked?color:''}">
                <div class="i-radio-title">{{value}}</div>
            </label>
        </i-cell>
    </div>
</template>
<script>
import findParent from "../mixins/find-parent.js";
const prefixCls = "i-radio";
export default {
  name: "radio",
  mixins: [findParent],
  props: {
    iClass: String,
    value: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
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
      //   checked: true,
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
    this.findParent("radio-group");
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
  }
}
</style>
