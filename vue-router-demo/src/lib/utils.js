/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
const local = {}

local.install = function (Vue, options) {
  Vue.prototype.$local = {
    save (key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    fetch (key) {
      return JSON.parse(localStorage.getItem(key)) || {}
    }
  }
}

export default local
