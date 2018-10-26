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
import actionSheet from './action-sheet/action-sheet.vue'
import progress from './progress/progress.vue'
import drawer from './drawer/drawer.vue'
import divider from './divider/divider.vue'
import steps from './steps/steps.vue'
import step from './steps/step.vue'
import modal from './modal/modal.vue'

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
  Vue.component('i-action-sheet', actionSheet)
  Vue.component('i-progress', progress)
  Vue.component('i-drawer', drawer)
  Vue.component('i-divider', divider)
  Vue.component('i-steps', steps)
  Vue.component('i-step', step)
  Vue.component('i-modal',modal)
 
}

export default install