<template>
  <div :class="['i-collapse']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "i-collapse",
  props: {
    name: String,
    accordion: { type: Boolean, default: false }
  },
  data() {
    return { allList: [] };
  },
  methods: {
    clickfn(name) {
      const allList = this.allList;
      allList.forEach(item => {
        if (name === item.name) {
          item.data.showContent = "i-collapse-item-show-content";
        } else {
          item.data.showContent = "";
        }
      });
    }
  }
};
</script>

