# Input 输入框

#### 概述

基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。

#### 使用指南

#### 示例

```html
<template>
  <div>
    <i-panel title="基础用法">
      <i-input v-model="value1" title="收货人" autofocus placeholder="名字" />
      <i-input v-model="value2" type="number" title="联系电话" placeholder="请输入手机号" />
      <i-input v-model="value3" type="textarea" autosize title="详细地址" placeholder="请输入详细地址(最多50字)" :maxlength="50" />
      <i-input v-model="value4" title="用户信息" disabled />
      <i-input v-model="value8" readonly title="只读输入框"></i-input>
    </i-panel>

    <i-panel title="无标题输入框">
      <i-input v-model="value5" placeholder="请输入收货人姓名" />
    </i-panel>

    <i-panel title="圆角输入框">
      <i-input @change="changeValue" @focus="focus" @blur="blur" v-model="value6" type="number" right title="消费总额" mode="wrapped" placeholder="询问收银员后输入" />
      <i-input v-model="value7" type="number" right error title="不参与优惠金额" mode="wrapped" placeholder="询问收银员后输入" />
    </i-panel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "输入框已禁用",
      value5: "",
      value6: "",
      value7: "",
      value8: "只读输入框"
    };
  },
  methods: {
    changeValue(value) {
      console.log(value);
    },
    focus(e) {
      console.log(e);
    },
    blur(e) {
      console.log(e);
    }
  }
};
</script>
```

#### Input props

| 属性        | 说明                                                                                        | 类型           | 默认值 |
|-------------|-------------------------------------------------------------------------------------------|----------------|--------|
| i-class     | 自定义 class 类名                                                                           | String         | -      |
| title       | 输入框左侧标题，若传入为空，则不显示标题                                                      | String         | -      |
| type        | 输入框类型，可选值为 text、textarea、password、number                                           | String         | text   |
| disabled    | 设置输入框为禁用状态                                                                        | Boolean        | false  |
| readonly    | 设置输入框为只读状态                                                                        | Boolean        | false  |
| placeholder | 占位文本                                                                                    | String         | -      |
| autofocus   | 自动获取焦点                                                                                | Boolean        | false  |
| mode        | 输入框展示样式，可选值为 wrapped, normal                                                     | String         | normal |
| right       | 输入框内容是否居右显示                                                                      | Boolean        | false  |
| error       | 是否显示为输入框错误情况下的样式                                                            | Boolean        | false  |
| maxlength   | 最大输入长度                                                                                | Number         | -      |
| autosize    | 自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为 px | Boolean/Object | false  |

##### Input events

| 事件名 | 说明                     | 返回值 |
|--------|------------------------|--------|
| change | 当绑定值变化时触发的事件 | value  |
| focus  | 输入框 focus             | event  |
| blur   | 输入框 blur              | event  |