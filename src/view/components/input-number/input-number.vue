<template>
    <div :class="['i-input-number', `i-input-number-size-${size}`]">
        <div :class="['i-input-number-selector', 'i-input-number-minus', value <= +min ? 'i-input-number-disabled' : '' ]" :data-disabled="value <= min" @click="handleMinus">-</div>
        <input :class="['i-input-number-text', min >= max ? 'i-input-number-disabled' : '' ]" type="number" :value="value" :disabled="min >= max" @input="$emit('input', $event.target.value)" @blur="handleBlur" />
        <div :class="['i-input-number-selector', 'i-input-number-plus', value >= +max ? 'i-input-number-disabled' : '' ]" :data-disabled="value >= max" @click="handlePlus">+</div>
    </div>
</template>
<script>
export default {
  props: {
    // small || default || large
    size: {
      type: String,
      default: "small"
    },
    value: {
      type: [Number, String],
      default: 1
    },
    min: {
      type: [Number, String],
      default: -Infinity
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    }
  },
  methods: {
    addNum(num1, num2) {
      let sq1, sq2, m;
      try {
        sq1 = num1.toString().split(".")[1].length;
      } catch (e) {
        sq1 = 0;
      }
      try {
        sq2 = num2.toString().split(".")[1].length;
      } catch (e) {
        sq2 = 0;
      }
      m = Math.pow(10, Math.max(sq1, sq2));
      return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
    },
    handleChangeStep(e, type) {
      const { dataset = {} } = e.currentTarget;
      const { disabled } = dataset;
      //   let { value } = this.data;
      const step = this.step;
      let value = this.value;

      if (disabled) return null;

      if (type === "minus") {
        value = this.addNum(value, -step);
      } else if (type === "plus") {
        value = this.addNum(value, step);
      }

      if (value < this.min || value > this.max) return null;
      this.handleEmit(value, type);
      this.$emit("input", value);
    },

    handleMinus(e) {
      this.handleChangeStep(e, "minus");
    },

    handlePlus(e) {
      this.handleChangeStep(e, "plus");
    },

    handleBlur(e) {
      let value = e ? e.target.value : this.value;
      const min = +this.min;
      const max = +this.max;

      if (!value) {
        setTimeout(() => {
          this.handleEmit(value);
        }, 16);
        return;
      }
      value = +value;
      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      this.handleEmit(value);
    },
    handleEmit(value, type) {
      const data = {
        value: value
      };
      if (type) data.type = type;

      // this.triggerEvent("change", data);
      this.$emit("change", data);
      this.$emit("input", value);
    }
  },
  mounted() {
    this.handleBlur();
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-input-number {
  color: @text-color;
  // 清除浮动
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  // 去除input[type="number"]默认样式
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &-selector {
    // display: inline-block;
    line-height: 20px;
    padding: 5px 0;
    text-align: center;
    min-width: 40px;
    box-sizing: border-box;
    vertical-align: middle;
    font-size: @size-font-small;
    border: 1px solid @border-color-base;
    float: left;
    cursor: pointer;
  }

  &-minus {
    border-right: none;
    border-radius: 2px 0 0 2px;
  }
  &-plus {
    border-left: none;
    border-radius: 0 2px 2px 0;
  }

  &-text {
    border: 1px solid @border-color-base;
    // display: inline-block;
    text-align: center;
    vertical-align: middle;
    height: 30px;
    width: 40px;
    /* 重置 input 默认样式 */
    min-height: auto;
    font-size: @size-font-small;
    line-height: 30px;
    float: left;
    padding: 0;
    outline: none
  }

  &-disabled {
    border-color: @btn-disable-border;
    color: @btn-disable-color;
    background: @btn-disable-bg;
  }
}
</style>
