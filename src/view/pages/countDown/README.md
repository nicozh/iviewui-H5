# CountDown 倒计时

#### 使用指南

#### 示例

```html
<template>
    <div>
        <div class="view-wrap">
            <span class="type-title">倒计时：</span>
            <i-count-down :target="targetTime" :clearTimer="clearTimer"></i-count-down>
        </div>

        <div class="view-wrap">
            <span class="type-title">显示天的倒计时：</span>
            <i-count-down :target="targetTime1" show-day :clearTimer="clearTimer"></i-count-down>
        </div>

        <div class="view-wrap">
            <span class="type-title">自定义格式倒计时：</span>
            <i-count-down :target="targetTime" :format="myFormat" :clearTimer="clearTimer"></i-count-down>
        </div>

        <div class="view-wrap">
            <span class="type-title">自定义格式倒计时：</span>
            <i-count-down :target="targetTime1" show-day :format="myFormat1" :clearTimer="clearTimer"></i-count-down>
        </div>

        <div class="view-wrap">
            <span class="type-title">执行回调的倒计时：</span>
            <i-count-down :target="targetTime2" @callback="myLinsterner" :clearTimer="clearTimer"></i-count-down>
            <span>倒计时状态：{{status}}</span>
        </div>

        <div class="view-wrap">
            <span class="type-title">修改倒计时样式：</span>
            <i-count-down :target="targetTime" class="big" :clearTimer="clearTimer"></i-count-down>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      targetTime: 0,
      targetTime1: 0,
      targetTime2: 0,
      myFormat: ["时", "分", "秒"],
      myFormat1: ["天", "时", "分", "秒"],
      status: "进行中...",
      clearTimer: false
    };
  },
  created() {
    this.targetTime = new Date().getTime() + 6430000,
    this.targetTime1 = new Date().getTime() + 86430000,
    this.targetTime2 = new Date().getTime() + 10000;
  },
  methods: {
    myLinsterner(e) {
      this.status = "结束";
    }
  },
  destoryed() {
      this.clearTimer = true
  }
};
</script>

<style lang="less">
.view-wrap {
  padding: 10px 20px;
}

.type-title {
  padding: 10px 0;
}

.big {
  font-size: 20px;
  color: #3399ff;
  font-weight: bold;
}
</style>
```

#### API

##### CountDown props

| 属性       | 说明           | 类型    | 默认值 |
|------------|--------------|---------|--------|
| target     | 目标时间       | Number  | -      |
| showDay    | 是否显示天数   | Boolean | false  |
| format     | 时间格式化显示 | Array   | -      |
| clearTimer | 是否停止计时   | Boolean | false  |

##### CountDown events

| 事件名   | 说明           | 返回值 |
|----------|--------------|--------|
| callback | 倒计时结束回调 | -      |