<template>
    <div>
        <p>一般用法</p>
        <i-button :inline="true">行内按钮</i-button>
        <i-button :inline="true" type="primary">行内按钮</i-button>
        <i-button :inline="true" type="success">行内按钮</i-button>
        <i-button>默认按钮</i-button>
        <i-button type="error" :long="true">联通两边按钮</i-button>
        <i-button type="primary">Primary</i-button>
        <i-button type="ghost">Ghost</i-button>
        <i-button type="info">Info</i-button>
        <i-button type="success">Success</i-button>
        <i-button type="warning">Warning</i-button>
        <i-button type="error">Error</i-button>
        <p>不同大小</p>
        <i-button type="primary" size="large">大尺寸</i-button>
        <i-button type="primary" size="default">默认尺寸</i-button>
        <i-button type="primary" size="small">小尺寸</i-button>
        <p>圆角不同尺寸</p>
        <i-button type="success" shape="circle" size="large">大尺寸</i-button>
        <i-button type="success" shape="circle">默认尺寸</i-button>
        <i-button type="success" shape="circle" size="small">小尺寸</i-button>
        
        <i-button type="primary" :loading="true">加载中按钮</i-button>

        <i-button type="primary" disabled>禁用按钮</i-button>
    </div>
</template>