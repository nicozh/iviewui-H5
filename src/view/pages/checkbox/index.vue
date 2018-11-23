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
