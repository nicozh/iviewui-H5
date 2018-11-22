<template>
  <div class="i-cell-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "i-cell-group",
  props: {
    iClass: String
  },
  methods: {
    _updateIsLastCell() {
      let cells = this.$children;
      const len = cells.length;
      if (len > 0) {
        let lastIndex = len - 1;
        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index === lastIndex);
        });
      }
    }
  }
};
</script>
