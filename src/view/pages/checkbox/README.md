# CheckBox 复选框

#### 概述

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

#### 使用指南

#### 示例

```html
<template>
  <div>
    <i-panel title="group-水果">
      <i-checkbox-group :max="3" v-model="current" @change="handleFruitChange">
        <i-checkbox v-for="item in fruit" :position="position" :key="item.id" :value="item.name">
        </i-checkbox>
      </i-checkbox-group>
    </i-panel>

    <i-button @click="handleClick" type="ghost">切换复选框位置</i-button>

    <i-panel title="checkbox-动物">
      <i-checkbox-group v-model="current2" @change="handleAnimalChange">
        <i-checkbox :value="animal" :disabled="disabled"></i-checkbox>
      </i-checkbox-group>
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
      current: ["苹果", "葡萄"],
      position: "left",
      animal: "熊猫",
      checked: false,
      disabled: false,
      current2: [],
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
    },
    changevalue(value) {
      console.log(value);
    }
  }
};
</script>

```

#### API

##### CheckboxGroup props

| 属性    | 说明                     | 类型   | 默认值 |
|---------|------------------------|--------|--------|
| v-model | 指定当前选中的项目 value | Array  | []     |
| max     | 最大可选数，0 为无限制    | Number | 0      |

##### CheckboxGroup events

| 事件名 | 说明           | 返回值  |
|--------|--------------|---------|
| change | 切换选项时触发 | current |

##### Checkbox props

| 属性     | 说明                        | 类型    | 默认值 |
|----------|---------------------------|---------|--------|
| value    | 当前项的 value              | String  | -      |
| disabled | 是否禁用当前项              | Boolean | false  |
| color    | 主题色                      | String  | -      |
| position | 位置，可选值为 left 或 right | String  | left   |