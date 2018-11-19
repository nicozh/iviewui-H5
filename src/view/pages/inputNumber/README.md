# InputNumber 数字输入框

#### 概述

输入一定范围的标准数值。

#### 使用指南

#### 示例

```html
<template>
    <div>
        <i-panel title="基础用法">
            <div style="padding: 16px">
                <i-input-number v-model="value1" min="0" max="100" @change="handleChange1" />
            </div>
        </i-panel>

        <i-panel title="小数">
            <div style="padding: 16px">
                <i-input-number v-model="value2" min="0.5" max="100" step="0.2" @change="handleChange2" />
            </div>
        </i-panel>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 0.1
    };
  },
  methods: {
    handleChange1(e) {
      console.log(e);
    },

    handleChange2(e) {
      console.log(e);
    }
  }
};
</script>

```

#### API

##### InputNumber props

| 属性  | 说明                      | 类型   | 默认值    |
|-------|-------------------------|--------|-----------|
| value | 当前值,使用v-model绑定    | Number | 1         |
| max   | 最大值                    | Number | Infinity  |
| min   | 最小值                    | Number | -Infinity |
| step  | 每次改变的步伐，可以是小数 | Number | 1         |

##### InputNumber events

| 事件名 | 说明                     | 返回值          |
|--------|------------------------|-----------------|
| change | 当绑定值变化时触发的事件 | { value, type } |