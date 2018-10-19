# List 列表
#### 基础布局组件。
#### 使用指南
#### 示例
```
<i-cell-group>
    <i-cell title="只显示箭头" is-link></i-cell>
    <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
    <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
    <i-cell title="开关">
        <switch slot="footer" checked />
    </i-cell>
</i-cell-group>
```
#### API
| 属性            | 说明                                                  | 类型    | 默认值 |
|-----------------|-----------------------------------------------------|---------|--------|
| title           | 左侧标题                                              | String  | -      |
| label           | 标题下方的描述信息                                    | String  | -      |
| value           | 右侧内容                                              | String  | -      |
| only-tap-footer | 只有点击 footer 区域才触发 tab 事件                   | Boolean | false  |
| is-link         | 是否展示右侧箭头并开启尝试以 url 跳转                 | null    | -      |
| url             | 当 isLink 设置为 true 时，点击 cell 会尝试跳转到该路径 | String  | -      |
