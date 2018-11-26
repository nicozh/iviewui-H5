import Card from './card/card'
import Button from './button/button'
import Row from './layout/row.vue'
import Col from './layout/col.vue'
import CellGroup from './list/cell-group.vue'
import Cell from './list/cell.vue'
import Icon from './icon/index'
import {Grid, GridItem, GridIcon, GridLabel} from './grid'
import Badge from './badge/badge'
import Panel from './panel/panel'
import TabBar from './tab-bar/tab-bar.vue'
import TabBarItem from './tab-bar/tab-bar-item.vue'
import ActionSheet from './action-sheet/action-sheet.vue'
import Progress from './progress/progress.vue'
import Drawer from './drawer/drawer.vue'
import Divider from './divider/divider.vue'
import Steps from './steps/steps.vue'
import Step from './steps/step.vue'
import Modal from './modal/modal.vue'
import Page from './page/page.vue'
import Switch from './switch/switch.vue'
import Tag from './tag/tag.vue'
import Tabs from './tabs/tabs.vue'
import Tab from './tabs/tab.vue'
import Swipeout from './swipeout/swipeout.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapse-item.vue'
import RadioGroup from './radio/radio-group.vue'
import Radio from './radio/radio.vue'
import Rate from './rate/rate.vue'
import Toast from './toast'
import Spin from './spin/spin.vue'
import Input from './input/input.vue'
import Message from './message'
import Avatar from './avatar/avatar.vue'
import InputNumber from './input-number/input-number.vue'
import LoadMore from './load-more/load-more.vue'
import Checkbox from './checkbox/checkbox.vue'
import CheckboxGroup from './checkbox/checkbox-group.vue'

let components = [
  Card,
  Button,
  Row,
  Col,
  CellGroup,
  Cell,
  Icon,
  Grid,
  GridItem,
  GridLabel,
  GridIcon,
  Badge,
  Panel,
  TabBar,
  TabBarItem,
  ActionSheet,
  Progress,
  Drawer,
  Divider,
  Steps,
  Step,
  Modal,
  Page,
  Switch,
  Tag,
  Tabs,
  Tab,
  Swipeout,
  Collapse,
  CollapseItem,
  RadioGroup,
  Radio,
  Rate,
  Spin,
  Input,
  Avatar,
  InputNumber,
  LoadMore,
  Checkbox,
  CheckboxGroup
]

let plugins = [
  Message,
  Toast
]

const install = (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  });
  plugins.forEach(item => {
    Vue.use(item)
  })
  Vue.component(GridLabel['name'],GridLabel)

}
export {
  Card,
  Button,
  Row,
  Col,
  CellGroup,
  Cell,
  Icon,
  Grid,
  GridItem,
  GridLabel,
  GridIcon,
  Badge,
  Panel,
  TabBar,
  TabBarItem,
  ActionSheet,
  Progress,
  Drawer,
  Divider,
  Steps,
  Step,
  Modal,
  Page,
  Switch,
  Tag,
  Tabs,
  Tab,
  Swipeout,
  Collapse,
  CollapseItem,
  RadioGroup,
  Radio,
  Rate,
  Spin,
  Input,
  Avatar,
  InputNumber,
  LoadMore,
  Checkbox,
  CheckboxGroup,
  Message,
  Toast
}
export default install