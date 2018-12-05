<template>
    <div :class="['i-tag', getClass(color,type,checked,checkable), checkable ? '' : 'i-tag-disable']" @click="tapTag">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "i-tag",
  props: {
    name: {
      type: String,
      default: ""
    },
    //can click or not click
    checkable: {
      type: Boolean,
      default: false
    },
    //is current choose
    checked: {
      type: Boolean,
      default: true
    },
    //background and color setting
    color: {
      type: String,
      default: "default"
    },
    //control fill or not
    type: {
      type: String,
      default: "dot"
    }
  },
  methods: {
    tapTag() {
      if (this.checkable) {
        const checked = this.checked ? false : true;
        this.$emit("change", {
          name: this.name || "",
          checked
        });
      }
    },
    getClass(color, type, checked, checkable) {
      var initColorList = ["blue", "green", "red", "yellow", "default"];
      var theme = "";
      var className = "i-tag-";
      if (initColorList.indexOf(color) > -1) {
        theme = className + color;
      }
      if (type === "border") {
        theme = className + color + "-border";
      }
      if (checkable && checked) {
        theme = className + color + "-checked";
      } else if (checkable && !checked) {
        theme =
          type === "border"
            ? className + color + "-border"
            : className + "none";
      }

      return theme;
    }
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

/* theme colors setting*/
.i-tag {
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding: 0 4px;
  border-radius: 2px;
  background: @tooltip-color;
  font-size: 11px;
  vertical-align: middle;
  border: 1px solid @border-color-base;

  &-none {
    border-color: @tooltip-color;
  }

  &-default {
    border-color: @border-color-base;
    background: @border-color-split;
  }

  &-red {
    background: @error-color;
    color: @tooltip-color;

    &-border {
      color: @error-color;
      background: @tooltip-color;
      border-color: @error-color;
    }

    &-checked {
      background: @error-color;
      color: @tooltip-color;
      border-color: @error-color;
    }
  }

  &-green {
    background: @success-color;
    color: @tooltip-color;
    border-color: @success-color;

    &-border {
      color: @success-color;
      background: @tooltip-color;
      border-color: @success-color;
    }

    &-checked {
      background: @success-color;
      color: @tooltip-color;
      border-color: @success-color;
    }
  }

  &-blue {
    background: @link-color;
    color: @tooltip-color;
    border-color: @link-color;

    &-border {
      color: @link-color;
      background: @tooltip-color;
      border-color: @link-color;
    }

    &-checked {
      background: @link-color;
      color: @tooltip-color;
      border-color: @link-color;
    }
  }

  &-yellow {
    background: @warning-color;
    color: @tooltip-color;
    border-color: @warning-color;

    &-border {
      color: @warning-color;
      background: @tooltip-color;
      border-color: @warning-color;
    }

    &-checked {
      background: @warning-color;
      color: @tooltip-color;
      border-color: @warning-color;
    }
  }

  &-default-checked {
    background: @border-color-split;
    color: @text-color;
    border-color: @border-color-split;
  }
}
</style>