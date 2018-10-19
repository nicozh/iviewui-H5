# Button 按钮

#### 示例

```
一般用法

<i-button>默认按钮</i-button>
<i-button type="error" long="true">联通两边按钮</i-button>
<i-button type="primary">Primary</i-button>
<i-button type="ghost">Ghost</i-button>
<i-button type="info">Info</i-button>
<i-button type="success">Success</i-button>
<i-button type="warning">Warning</i-button>
<i-button type="error">Error</i-button>

不同尺寸

<i-button type="primary" size="large">大尺寸</i-button>
<i-button type="primary" size="default">默认尺寸</i-button>
<i-button type="primary" size="small">小尺寸</i-button>

圆角的不同尺寸

<i-button type="success" shape="circle" size="large">大尺寸</i-button>
<i-button type="success" shape="circle">默认尺寸</i-button>
<i-button type="success" shape="circle" size="small">小尺寸</i-button>

<i-button type="primary" loading="true">加载中按钮</i-button>

<i-button type="primary" disabled>禁用按钮</i-button>

```
#### API
| 属性     | 说明                                                                                | 类型    | 默认值 |
|----------|-----------------------------------------------------------------------------------|---------|--------|
| type     | 按钮类型，可选值为 default, primary, ghost, info, success, warning, error 或者不设置 | String  | -      |
| inline   | 是否为行内元素，开启后宽度为自适应                                                   | Boolean | false  |
| size     | 按钮大小，可选值为 large、small、default 或者不设置                                    | String  | -      |
| shape    | 按钮形状，可选值为 circle 和 square                                                  | String  | square |
| disabled | 设置按钮为禁用状态                                                                  | Boolean | fasle  |
| loading  | 设置按钮为加载中状态                                                                | Boolean | false  |
| long     | 开启后，按钮没有间距                                                                 | Boolean | false  |
