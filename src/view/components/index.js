import card from './card/card'
import button from './button/button'
import row from './row/index'
import col from './col/index'
import cellGroup from './cell-group/index'
import cell from './cell/index'
import icon from './icon/index'
import {grid,gridItem,gridIcon,gridLabel} from './grid'
import badge from './badge/badge'
import panel from './panel/panel'
import tabBar from './tab-bar/tab-bar.vue'
import tabBarItem from './tab-bar/tab-bar-item.vue'

const install = (Vue) => {
  Vue.component('i-card', card)
  Vue.component('i-button', button)
  Vue.component('i-row', row)
  Vue.component('i-col', col)
  Vue.component('i-cell-group', cellGroup)
  Vue.component('i-cell', cell)
  Vue.component('i-icon', icon)
  Vue.component('i-grid', grid)
  Vue.component('i-grid-item', gridItem)
  Vue.component('i-grid-icon', gridIcon)
  Vue.component('i-grid-label', gridLabel)
  Vue.component('i-badge', badge)
  Vue.component('i-panel', panel)
  Vue.component('i-tab-bar', tabBar)
  Vue.component('i-tab-bar-item', tabBarItem)

}

export default install