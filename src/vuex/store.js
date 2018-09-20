import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// state 状态
const state = {
  count: 0,
  todos: [
    {id: 1, text: '...', done: true},
    {id: 2, text: '...', done: false}
  ],
  sfdsd: '1'
}
// gerrers 可以认为是store的计算属性
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => { return todo.done })
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
// 处理数据的犯法集合  更改vuex的store 只能需要commit 但commit是同步函数
const mutations = {
  increment (state, num) {
    state.count = (num || state.count) + 5
  },
  decrement (state, num) {
    state.count = (num || state.count) - 5
  }
}
// 将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement')
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
