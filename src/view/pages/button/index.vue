<template>
    <div style="margin:10px">
        <i-panel title="一般用法"></i-panel>

        <i-button @click="handleClick" inline>行内按钮</i-button>
        <i-button @click="handleClick" inline type="primary">行内按钮</i-button>
        <i-button @click="handleClick" inline type="success">行内按钮</i-button>

        <i-button @click="handleClick">默认按钮</i-button>
        <i-button @click="handleClick" type="primary">Primary</i-button>
        <i-button @click="handleClick" type="ghost">Ghost</i-button>
        <i-button @click="handleClick" type="info">Info</i-button>
        <i-button @click="handleClick" type="success">Success</i-button>
        <i-button @click="handleClick" type="warning">Warning</i-button>
        <i-button @click="handleClick" type="error">Error</i-button>

        <i-panel title="不同尺寸"></i-panel>

        <i-button @click="handleClick" type="primary" size="large">大尺寸</i-button>
        <i-button @click="handleClick" type="primary" size="default">默认尺寸</i-button>
        <i-button @click="handleClick" type="primary" size="small">小尺寸</i-button>

        <i-panel title="圆角的不同尺寸"></i-panel>

        <i-button @click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
        <i-button @click="handleClick" type="success" shape="circle">默认尺寸</i-button>
        <i-button @click="handleClick" type="success" shape="circle" size="small">小尺寸</i-button>

        <i-button @click="handleClick" type="primary" loading>加载中按钮</i-button>

        <i-button @click="handleClick" type="primary" disabled>禁用按钮</i-button>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick() {}
  }
};
</script>
