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
