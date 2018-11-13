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
import page from './page/page.vue'
import Switch from './switch/switch.vue'
import tag from './tag/tag.vue'
import tabs from './tabs/tabs.vue'
import tab from './tabs/tab.vue'
import swipeout from './swipeout/swipeout.vue'
import collapse from './collapse/collapse.vue'
import collapseItem from './collapse/collapse-item.vue'
import radioGroup from './radio/radio-group.vue'
import radio from './radio/radio.vue'
import rate from './rate/rate.vue'
import toast from './toast'

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
  Vue.component('i-modal', modal)
  Vue.component('i-page', page)
  Vue.component('i-switch', Switch)
  Vue.component('i-tag', tag)
  Vue.component('i-tabs', tabs)
  Vue.component('i-tab', tab)
  Vue.component('i-swipeout', swipeout)
  Vue.component('i-collapse', collapse)
  Vue.component('i-collapse-item', collapseItem)  
  Vue.component('i-radio-group', radioGroup)
  Vue.component('i-radio', radio)
  Vue.component('i-rate', rate)
  Vue.use(toast)
  
}

export default install