# ActionSheet 动作面板
#### 概述
从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。
#### 使用指南
#### 示例
```html
<template>
    <div>
        <div style="margin-top: 100px">
            <i-button type="ghost" @click="handleOpen1">一般用法</i-button>
            <i-button type="ghost" @click="handleOpen2">带有提示、异步</i-button>
        </div>

        <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @cancel="handleCancel1" @click="handleClickItem1"></i-action-sheet>

        <i-action-sheet :visible=" visible2" :actions=" actions2 " show-cancel @cancel="handleCancel2" @click="handleClickItem2" :mask-closable="false">
            <div slot="header" style="padding: 16px">
                <div style="color: #444;font-size: 16px">确定吗？</div>
                <span>删除后无法恢复哦</span>
            </div>
        </i-action-sheet>
    </div>
</template>
<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      actions1: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "去分享",
          icon: "share"
        }
      ],
      actions2: [
        {
          name: "删除",
          color: "#ed3f14"
        }
      ]
    };
  },
  methods: {
    handleOpen1() {
      this.visible1 = true;
    },

    handleCancel1() {
      this.visible1 = false;
    },

    handleOpen2() {
      this.visible2 = true;
    },

    handleCancel2() {
      this.visible2 = false;
    },

    handleClickItem1(index) {
      index += 1;
      this.$Message({
        content: "点击了选项" + index
      });
    },

    handleClickItem2() {
      const action = [...this.actions2];
      action[0].loading = true;

      this.actions2 = action;

      setTimeout(() => {
        action[0].loading = false;
        this.visible2 = false;
        this.actions2 = action;
        this.$Message({
          content: "删除成功！",
          type: "success"
        });
      }, 2000);
    }
  }
};
</script>
```

#### API

##### ActionSheet propertie

| 属性           | 说明                        | 类型    | 默认值 |
|----------------|---------------------------|---------|--------|
| i-class        | 自定义 class 类名           | String  | -      |
| i-class-mask   | 自定义 遮罩层 类名          | String  | -      |
| i-class-header | 自定义 标题栏 类名          | String  | -      |
| visible        | 是否显示组件                | Boolean | false  |
| mask-closable  | 点击遮罩层是否可以关闭组件  | Boolean | true   |
| show-cancel    | 是否显示取消按钮            | Boolean | false  |
| cancel-text    | 取消按钮的文案              | String  | 取消   |
| actions        | 按钮组，具体项参照后面的表格 | Array   | []     |

##### ActionSheet events

 | 事件名 | 说明                                             | 返回值 |
|--------|------------------------------------------------|--------|
| click  | 点击某个按钮时触发，返回按钮所在 actions 中的索引 | index  |
| cancel | 点击关闭或遮罩层时触发                           | -      |

##### ActionSheet slot

| 名称   | 说明                    |
|--------|-----------------------|
| header | 标题栏，可以添加提示信息 |

##### ActionSheet actions

| 属性     | 说明                 | 类型    | 默认值 |
|----------|--------------------|---------|--------|
| name     | 按钮文案             | String  | -      |
| icon     | 按钮图标             | String  | -      |
| color    | 按钮文字的颜色       | String  | -      |
| loading  | 按钮是否显示为加载中 | Boolean | false  |
| openType | 按钮的微信开放能力   | String  | -      |
