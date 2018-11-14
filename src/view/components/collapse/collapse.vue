<template>
    <div :class="[iClass, 'i-collapse']">
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    iClass: String,  
    name: String,
    accordion: Boolean
  },
  methods: {
    clickfn(name) {
      const allList = this.$children;
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

