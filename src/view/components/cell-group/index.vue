<template>
    <div :class="[iClass, 'i-cell-group']">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "cell-group",
  props: {
    iClass: String
  }
};
</script>
