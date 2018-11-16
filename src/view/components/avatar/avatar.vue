<template>
    <div :class="['i-avatar', `i-avatar-${shape }`, `i-avatar-${size}`, src ? 'i-avatar-image' : '' ]">
        <img :src="src" v-if="src !== ''">
        <div class="i-avatar-string" v-else>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    // small || large || default
    size: {
      type: String,
      default: "default"
    },
    src: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";

.i-avatar {
  display: inline-block;
  text-align: center;
  background: @avatar-bg;
  color: @avatar-color;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  vertical-align: middle;

  .avatar-size(@avatar-size-base, @avatar-font-size-base);

  &-large {
    .avatar-size(@avatar-size-lg, @avatar-font-size-lg);
  }

  &-small {
    .avatar-size(@avatar-size-sm, @avatar-font-size-sm);
  }

  &-image {
    background: transparent;
  }

  &-square {
    border-radius: @avatar-border-radius;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
}

.avatar-size(@size, @font-size) {
  width: @size;
  height: @size;
  line-height: @size;
  border-radius: @size / 2;
  font-size: @font-size;

  .ivu-avatar-string {
    line-height: @size;
  }
}
</style>
