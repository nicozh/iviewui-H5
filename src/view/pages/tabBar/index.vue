<template>
    <div>
        <i-panel title="基本用法"></i-panel>
        <i-tab-bar v-model="active" @change="change1">
            <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
            <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
            <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" :count="3" title="Notice"></i-tab-bar-item>
            <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
        </i-tab-bar>
        <i-panel title="自定义主题色"></i-panel>
        <i-tab-bar v-model="active" @change="change2" color="#f759ab">
            <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
            <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
            <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
            <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
        </i-tab-bar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change1(index) {
      console.log(index);
    },
    change2(index) {
      console.log(index);
    }
  }
};
</script>