<template>
  <div>
    <div :class="[iClass, 'i-cell', 'i-input', error ? 'i-input-error' : '', mode === 'wrapped' ? 'i-input-wrapped' : '']">
      <div v-if="title" class="i-cell-hd i-input-title">{{ title }}</div>
      <textarea ref="input" v-if="type === 'textarea'" auto-height :readonly=readonly :disabled="disabled" :autofocus="autofocus" :value="value" :placeholder="placeholder" :maxlength="maxlength" :class="['i-input-input', 'i-cell-bd', right ? 'i-input-input-right' : '']" placeholder-class="i-input-placeholder" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur"></textarea>
      <input ref="input" v-else :type="type" :readonly=readonly :disabled="disabled" :autofocus="autofocus" :value="value" :placeholder="placeholder" :maxlength="maxlength" :class="['i-input-input', 'i-cell-bd', right ? 'i-input-input-right' : '']" placeholder-class="i-input-placeholder" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number],
    iClass: String,
    title: String,
    // text || textarea || password || number
    type: {
      type: String,
      default: "text"
    },
    readonly: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "normal"
    },
    right: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    },
    autosize: [Boolean, Object]
  },
  data() {
    return {};
    // value: ''
  },
  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted() {
    this.$nextTick(this.adjustSize);
  },
  methods: {
    isObj(x) {
      const type = typeof x;
      return x !== null && (type === "object" || type === "function");
    },
    handleInputChange(event) {
      this.$emit("input", event.target.value);
    },

    handleInputFocus(event) {
      this.$emit("focus", event);
    },

    handleInputBlur(event) {
      this.$emit("blur", event);
    },
    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === "textarea" && this.autosize) || !input) {
        return;
      }
      input.style.height = "auto";
      let height = input.scrollHeight;
      if (this.isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }
      if (height) {
        input.style.height = height + "px";
      }
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";
@import "../cell/index.less";

.i-input {
  padding: 7px 15px;
  color: @text-color;

  &-wrapped {
    margin: 10px 15px;
    background-color: #fff;

    &::after {
      left: 0;
      border-width: 1px;
      border-radius: 4px;
    }
  }

  &-error {
    color: @error-color;
  }

  &-title {
    color: @text-color;
    min-width: 65px;
    padding-right: 10px;
  }

  &-input {
    flex: 1;
    line-height: 1.6;
    padding: 4px 0;
    min-height: 22px;
    height: auto;
    font-size: 14px;
    border: 0;
    margin: 0;
    // padding: 0;
    width: 100%;
    resize: none;
    display: block;
    box-sizing: border-box;
    background-color: transparent;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    // input[type="number"] {
    //     -moz-appearance: textfield;
    // }
  }

  &-placeholder {
    font-size: @size-font-base;
  }

  &-input-right {
    text-align: right;
  }
}

/* 圆角输入框，强制展示边框 */
.i-input.i-input-wrapped::after {
  display: block;
}

/* 圆角输入框出现错误时，将边框也置红 */
.i-input-wrapped.i-input-error::after {
  border-color: @error-color;
}
</style>