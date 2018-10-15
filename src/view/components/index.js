import card from './card/card'
import button from './button/button'
import row from './row/index'
import col from './col/index'
import cellGroup from './cell-group/index'
import cell from './cell/index'
import icon from './icon/index'
import {grid,gridItem,gridIcon,gridLabel} from './grid'
import badge from './badge/badge'

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

}

export default install