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
  data() {
    return {
      list: []
    };
  },
  watch: {
    list() {
      this._updateIsLastCell();
    }
  },
  methods: {
    _updateIsLastCell() {
      // let cells = this.$children;
      let cells = this.list;
      const len = cells.length;
      if (len > 0) {
        let lastIndex = len - 1;
        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index === lastIndex);
          console.log(cell.isLastCell);
        });
      }
    }
  }
};
</script>
