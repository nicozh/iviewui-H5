<template>
  <div class="comp-content">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.comp-content {
  padding: 30px 20px 30px 30px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  & table {
    font-family: Consolas, Menlo, Courier, monospace;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin:0 0 24px 0;
    & th {
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
      text-align: left;
      background: #f7f7f7;
      white-space: nowrap;
      color: #5c6b77;
      font-weight: 600;
    }
    & td {
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
      text-align: left;
    }
  }
}
</style>

