import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule = {
  state: {
    title: 'hello',
    list: []
  },
  mutations: {
    changeTitle (state, payload) {
      state.title = payload.title
    },
    changeList (state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    getListAction (context, obj) {
      axios.get('https://easy-mock.com/mock/5bed6c42014e6f25249f0380/example/list')
        .then((data) => {
          context.commit('changeList', { list: data.data })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

export default new Vuex.Store({
  state: {
    count: 100,
    title: 'hello',
    list: []
  },
  getters: {
    filterCount (state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  mutations: { // 同步
    addIncrement (state, payload) {
      state.count += payload.n
    },
    deIncrement (state, payload) {
      state.count -= payload.m
    }

  },
  actions: { // 异步 提交mutation  context是一个与store实例具有相同属性和方法的对象
    addAction ({ commit, dispatch }) {
      setTimeout(() => {
        commit('addIncrement', { n: 5 })
        dispatch('textAction', { text: '测试' })
      }, 100)
    },
    textAction (context, obj) {
      console.log('我被触发了', obj)
    }

  },
  modules: {
    selectModule
  }
})
