<template>
    <div :class="['i-col' ,span ? 'i-col-span-' + span : '' ,offset ? 'i-col-offset-' + offset : '']">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "i-col",
  props: {
    span: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>
<style lang="less">
@grid-columns: 24;

.i-col {
  float: left;
  box-sizing: border-box;
  width: 0;
}

.generate-columns(@grid-columns, @index: 1) when (@index =< @grid-columns) {
  .i-col-span-@{index} {
    display: block;
    width: percentage((@index / @grid-columns));
  }

  .i-col-offset-@{index} {
    margin-left: percentage((@index / @grid-columns));
  }

  .generate-columns(@grid-columns, (@index + 1));
}

.generate-columns(@grid-columns);
</style>