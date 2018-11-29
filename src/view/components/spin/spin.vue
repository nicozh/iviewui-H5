<template>
  <div :class="['i-spin', `i-spin-${size}` , fix ? 'i-spin-fix' : ''  , custom ? 'i-spin-show-text' : '' , fullscreen ? 'i-spin-fullscreen' : '']">
    <div class="i-spin-main">
      <div class="i-spin-dot"></div>
      <div class="i-spin-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "i-spin",
  props: {
    size: {
      type: String,
      default: "default"
    },
    fix: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

@spin-dot-size-small: 12px;
@spin-dot-size: 20px;
@spin-dot-size-large: 32px;

.size(@width; @height) {
  width: @width;
  height: @height;
}

.square(@size) {
  .size(@size; @size);
}

.i-spin {
  color: @primary-color;
  vertical-align: middle;
  text-align: center;

  &-dot {
    position: relative;
    display: block;
    border-radius: 50%;
    background-color: @primary-color;
    .square(@spin-dot-size);
    animation: ani-spin-bounce 1s 0s ease-in-out infinite;
  }

  &-large &-dot {
    .square(@spin-dot-size-large);
  }

  &-small &-dot {
    .square(@spin-dot-size-small);
  }

  &-fix {
    position: absolute;
    top: 0;
    left: 0;
    z-index: @zindex-spin;
    .square(100%);
    background-color: rgba(255, 255, 255, 0.9);
  }
  &-fullscreen {
    z-index: @zindex-spin-fullscreen;
    &-wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  &-fix &-main {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &-fix &-dot {
    display: inline-block;
  }

  &-text,
  &-show-text &-dot {
    display: none;
  }

  &-show-text &-text {
    display: block;
    font-size: @size-font-base;
  }
}

@keyframes ani-spin-bounce {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
