# Button 按钮

#### 示例

```html
一般用法
<template>
    <div style="margin:10px">
        <i-panel title="一般用法"></i-panel>

        <i-button @click="handleClick" inline>行内按钮</i-button>
        <i-button @click="handleClick" inline type="primary">行内按钮</i-button>
        <i-button @click="handleClick" inline type="success">行内按钮</i-button>

        <i-button @click="handleClick">默认按钮</i-button>
        <i-button @click="handleClick" type="error" long="true">联通两边按钮</i-button>
        <i-button @click="handleClick" type="primary">Primary</i-button>
        <i-button @click="handleClick" type="ghost">Ghost</i-button>
        <i-button @click="handleClick" type="info">Info</i-button>
        <i-button @click="handleClick" type="success">Success</i-button>
        <i-button @click="handleClick" type="warning">Warning</i-button>
        <i-button @click="handleClick" type="error">Error</i-button>

        <i-panel title="不同尺寸"></i-panel>

        <i-button @click="handleClick" type="primary" size="large">大尺寸</i-button>
        <i-button @click="handleClick" type="primary" size="default">默认尺寸</i-button>
        <i-button @click="handleClick" type="primary" size="small">小尺寸</i-button>

        <i-panel title="圆角的不同尺寸"></i-panel>

        <i-button @click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
        <i-button @click="handleClick" type="success" shape="circle">默认尺寸</i-button>
        <i-button @click="handleClick" type="success" shape="circle" size="small">小尺寸</i-button>

        <i-button @click="handleClick" type="primary" loading="true">加载中按钮</i-button>

        <i-button @click="handleClick" type="primary" disabled>禁用按钮</i-button>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick() {}
  }
};
</script>

```

#### API

##### Button props

| 属性     | 说明                                                                                | 类型    | 默认值 |
|----------|-----------------------------------------------------------------------------------|---------|--------|
| type     | 按钮类型，可选值为 default, primary, ghost, info, success, warning, error 或者不设置 | String  | -      |
| inline   | 是否为行内元素，开启后宽度为自适应                                                   | Boolean | false  |
| size     | 按钮大小，可选值为 large、small、default 或者不设置                                    | String  | -      |
| shape    | 按钮形状，可选值为 circle 和 square                                                  | String  | square |
| disabled | 设置按钮为禁用状态                                                                  | Boolean | fasle  |
| loading  | 设置按钮为加载中状态                                                                | Boolean | false  |

##### Button Events

| 事件名 | 说明                                   | 返回值 |
|--------|--------------------------------------|--------|
| click  | 点击按钮且按钮状态不为加载或禁用时触发 | -      |