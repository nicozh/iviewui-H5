<template>
  <div :class="['i-steps']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "i-steps",
  props: {
    current: {
      type: Number,
      default: -1
    },
    status: {
      type: String,
      //wait、process、finish、error
      default: ""
    },
    direction: {
      type: String,
      //default has horizontal or vertical
      default: "horizontal"
    }
  },
  watch: {
    current: function() {
      this._updateDataChange();
    }
  },
  methods: {
    _updateDataChange() {
      let steps = this.$children;
      let length = this.$children.length;
      const len = length;
      if (len > 0) {
        steps.forEach((step, index) => {
          step.updateDataChange({
            len: len,
            index: index,
            current: this.current,
            direction: this.direction
          });
        });
      }
    }
  },
  mounted() {
    this._updateDataChange();
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-steps {
  width: 100%;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>