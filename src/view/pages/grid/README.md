# Grid 宫格
#### 概述
基础宫格布局。每行 3 个宫格使用最佳。
宫格共包含 4 个组件：i-grid、i-grid-item、i-grid-icon、i-grid-label，其中，i-grid-icon 和 i-grid-label 默认定制好了样式，但在开发中也可不用这两个组件
#### 示例
```
<i-grid>
    <i-grid-item>
        <i-grid-icon>
            <image src="../images/icon-vip.png" />
        </i-grid-icon>
        <i-grid-label>Grid</i-grid-label>
    </i-grid-item>
    <i-grid-item>Grid</i-grid-item>
    <i-grid-item>Grid</i-grid-item>
</i-grid>
```