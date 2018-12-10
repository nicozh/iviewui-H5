<template>
    <div :class="['i-swipeout-wrap']">
        <div class="i-swipeout-item" @touchstart="handlerTouchstart" @touchmove="handlerTouchmove" @touchend="handlerTouchend" :style="{transform:`translate(${this.data.position.pageX}px, 0)`}">
            <div class="i-swipeout-content">
                <slot name="content"></slot>
            </div>
            <div class="i-swipeout-button-right-group" v-if="actions.length > 0" @touchend.stop="loop">
                <div class="i-swipeout-button-right-item" v-for="(item,index) in actions" :style="[setStyle(item),{width:item.width+'px'}]" :key="index" :data-index="index" @click="handlerButton(index)">
                    <i-icon v-if="item.icon" :type="item.icon" :size="item.fontsize" :color="item.color">
                    </i-icon>
                    {{item.name}}
                </div>
            </div>
            <div class="i-swipeout-button-right-group" @touchend.stop="loop" @click="handlerParentButton" v-if="actions.length === 0" :style="{width:`${operateWidth}`+'px',right:'-'+`${operateWidth}`+'px'}">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from "../icon/index";
export default {
  name: "i-swipeout",
  components: { [Icon.name]: Icon },
  props: {
    actions: {
      default: function() {
        return [];
      },
      type: Array
    },
    unclosable: {
      default: false,
      type: Boolean
    },
    toggle: {
      default: false,
      type: Boolean
    },
    operateWidth: {
      type: Number,
      default: 160
    }
  },
  data() {
    return {
      data: {
        tStart: {
          pageX: 0,
          pageY: 0
        },
        //限制滑动距离
        limitMove: 0,
        //element move position
        position: {
          pageX: 0,
          pageY: 0
        }
      }
    };
  },
  watch: {
    actions: function() {
      this._updateButtonSize();
    },
    toggle: function() {
      this.closeButtonGroup();
    }
  },
  methods: {
    swipeDirection(x1, x2, y1, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
        ? x1 - x2 > 0
          ? "Left"
          : "Right"
        : y1 - y2 > 0
          ? "Up"
          : "Down";
    },
    setStyle: function(item) {
      var defaults = "#f7f7f7";
      return {
        background: item.background ? item.background : defaults,
        color: item.color
      };
    },
    setPosition: function(position) {
      return "transform:translate(" + position.pageX + "px,0);";
    },
    loop() {},
    _updateButtonSize() {
      const actions = this.actions;
      if (actions.length > 0) {
        let limitMovePosition = 0;
        actions.forEach(item => {
          limitMovePosition += item.width || 0;
        });
        this.data.limitMove = limitMovePosition;
      } else {
        this.data.limitMove = this.operateWidth;
      }
    },
    handlerTouchstart(event) {
      const touches = event.touches ? event.touches[0] : {};
      const tStart = this.data.tStart;
      if (touches) {
        for (let i in tStart) {
          if (touches[i]) {
            tStart[i] = touches[i];
          }
        }
      }
    },
    swipper(touches) {
      const data = this.data;
      const start = data.tStart;
      const spacing = {
        pageX: touches.pageX - start.pageX,
        pageY: touches.pageY - start.pageY
      };
      if (data.limitMove < Math.abs(spacing.pageX)) {
        spacing.pageX = -data.limitMove;
      }
      this.data.position = spacing;
    },
    handlerTouchmove(event) {
      const start = this.data.tStart;
      const touches = event.touches ? event.touches[0] : {};
      if (touches) {
        const direction = this.swipeDirection(
          start.pageX,
          touches.pageX,
          start.pageY,
          touches.pageY
        );
        if (direction === "Left") {
          this.swipper(touches);
        }
      }
    },
    handlerTouchend(event) {
      const start = this.data.tStart;
      const touches = event.changedTouches ? event.changedTouches[0] : {};
      if (touches) {
        const direction = this.swipeDirection(
          start.pageX,
          touches.pageX,
          start.pageY,
          touches.pageY
        );
        const spacing = {
          pageX: touches.pageX - start.pageX,
          pageY: touches.pageY - start.pageY
        };
        if (Math.abs(spacing.pageX) >= 40 && direction === "Left") {
          spacing.pageX =
            spacing.pageX < 0 ? -this.data.limitMove : this.data.limitMove;
        } else {
          spacing.pageX = 0;
        }
        this.data.position = spacing;
      }
    },
    handlerButton(event) {
      if (!this.unclosable) {
        this.closeButtonGroup();
      }
      this.$emit("change", event);
    },
    closeButtonGroup() {
      this.data.position = {
        pageX: 0,
        pageY: 0
      };
    },
    //控制自定义组件
    handlerParentButton(event) {
      if (!this.unclosable) {
        this.closeButtonGroup();
      }
    },
  },
  created() {
    this._updateButtonSize();
  }
};
</script>
<style lang="less">
@import "../styles/_base.less";
@import "../styles/_mixins.less";
@switch-prefix-cls: ~"i-swipeout";

.@{switch-prefix-cls} {
  &-wrap {
    border-bottom: @border-color-base solid 1px;
    background: @tooltip-color;
    position: relative;
    overflow: hidden;
  }

  &-item {
    width: 100%;
    padding: 15px 20px;
    box-sizing: border-box;
    transition: transform 0.2s ease;
    font-size: 14px;
  }

  &-content {
    white-space: nowrap;
    overflow: hidden;
  }

  &-button-right-group {
    position: absolute;
    right: -100%;
    top: 0;
    height: 100%;
    z-index: 1;
    width: 100%;
  }

  &-button-right-item {
    height: 100%;
    float: left;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>