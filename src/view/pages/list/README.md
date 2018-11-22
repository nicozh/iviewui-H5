# List 列表

#### 基础布局组件。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-panel class="cell-panel-demo">
            <i-cell title="单行列表"></i-cell>
        </i-panel>

        <i-panel class="cell-panel-demo">
            <i-cell title="单行列表" is-link value="详细信息"></i-cell>
        </i-panel>

        <i-panel class="cell-panel-demo">
            <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
        </i-panel>

        <i-panel class="cell-panel-demo" title="带 icon 的 Cell">
            <i-cell title="单行列表" value="详细信息">
                <i-icon type="like_fill" slot="icon" />
            </i-cell>
        </i-panel>

        <i-panel class="cell-panel-demo" title="带箭头的 cell">
            <i-cell title="只显示箭头" is-link></i-cell>
        </i-panel>

        <i-panel class="cell-panel-demo">
            <i-cell title="跳转到首页" is-link url="/pages/index/index"></i-cell>
        </i-panel>

        <i-panel class="cell-panel-demo" title="cell 组">
            <i-cell-group>
                <i-cell title="只显示箭头" is-link></i-cell>
                <i-cell title="跳转到首页" is-link url="/pages/index/index "></i-cell>
                <i-cell title="只有 footer 点击有效" is-link url="/pages/index/index" only-tap-footer></i-cell>
                <div v-if="switch1">
                    <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
                    <i-cell title="表单">
                        <i-input title="收货人"></i-input>
                        <i-input title="地址"></i-input>
                    </i-cell>
                </div>
                <i-cell title="开关">
                    <i-switch :value="switch1" @change="onChange" slot="footer">
                        <i-icon type="right" slot="open"></i-icon>
                        <i-icon type="close" slot="close"></i-icon>
                    </i-switch>
                </i-cell>
            </i-cell-group>
        </i-panel>

        <i-panel class="cell-panel-demo">
            <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
        </i-panel>
    </div>
</template>
<script>
export default {
  data() {
    return {
      switch1: true
    };
  },
  methods: {
    onChange(value) {
      this.switch1 = value;
    },
  }
};
</script>

<style lang="less">
.cell-panel-demo {
  display: block;
  margin-top: 15px;
}
</style>

```

#### API

##### Cell props

| 属性            | 说明                                                  | 类型    | 默认值 |
|-----------------|-----------------------------------------------------|---------|--------|
| title           | 左侧标题                                              | String  | -      |
| label           | 标题下方的描述信息                                    | String  | -      |
| value           | 右侧内容                                              | String  | -      |
| only-tap-footer | 只有点击 footer 区域才触发 tab 事件                   | Boolean | false  |
| is-link         | 是否展示右侧箭头并开启尝试以 url 跳转                 | null    | -      |
| url             | 当 isLink 设置为 true 时，点击 cell 会尝试跳转到该路径 | String  | -      |

##### Cell events

| 事件名 | 说明                                                          | 返回值 |
|--------|-------------------------------------------------------------|--------|
| click  | 点击 cell 时触发，onlyTapFooter 为 true 时点击 footer 区域触发 | -      |

##### Cell slot

| 名称   | 说明                                                              |
|--------|-----------------------------------------------------------------|
| icon   | 标题前自定义的 icon，可使用 icon 自定义组件，具体使用参考 icon 组件 |
| footer | 右侧自定义 wxml 内容，如果设置了 value 属性，则不生效               |
