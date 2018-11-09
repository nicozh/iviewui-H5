# Radio 单选

#### 概述

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

#### 使用指南

#### 示例

```html
<template>
  <div>
    <i-panel title="group-水果">
      <i-radio-group v-model="current" @change="handleFruitChange">
        <i-radio v-for="item in fruit" :position="position" :key="item.id" :value="item.name">
        </i-radio>
      </i-radio-group>
    </i-panel>

    <i-button @click="handleClick" type="ghost">切换单选框位置</i-button>

    <i-panel title="radio-动物">
      <i-radio :value="animal" :disabled="disabled" :checked="checked" @change="handleAnimalChange">
      </i-radio>
    </i-panel>

    <i-button @click="handleDisabled" type="ghost">切换disabled状态</i-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fruit: [
        {
          id: 1,
          name: "香蕉"
        },
        {
          id: 2,
          name: "苹果"
        },
        {
          id: 3,
          name: "西瓜"
        },
        {
          id: 4,
          name: "葡萄"
        }
      ],
      current: "苹果",
      position: "left",
      animal: "熊猫",
      checked: false,
      disabled: false
    };
  },
  methods: {
    handleFruitChange(value) {
      console.log(value);
    },
    handleClick() {
      this.position = this.position.indexOf("left") !== -1 ? "right" : "left";
    },
    handleDisabled() {
      this.disabled = !this.disabled;
    },
    handleAnimalChange(value) {
      console.log(value);
    }
  }
};
</script>

```

#### API

##### RadioGroup props

| 属性    | 说明                     | 类型   | 默认值 |
|---------|------------------------|--------|--------|
| v-model | 指定当前选中的项目 value | 任意类型 | -      |

##### Radio props

| 属性     | 说明                        | 类型    | 默认值 |
|----------|---------------------------|---------|--------|
| i-class  | 自定义 class 类名           | String  | -      |
| value    | 当前项的 value              | String  | -      |
| disabled | 是否禁用当前项              | Boolean | false  |
| color    | 主题色                      | String  | -      |
| position | 位置，可选值为 left 或 right | String  | left   |

##### RadioGroup events

| 事件名 | 说明           | 返回值 |
|--------|--------------|--------|
| change | 切换选项时触发 | curent |