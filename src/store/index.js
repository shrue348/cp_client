import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

//login module
import loginState from './login/state'
import loginGetters from './login/getters'
import loginMutation from './login/mutation'
import loginAction from './login/action'





const loginModule = {
  state: loginState,
  getters: loginGetters,
  mutations: loginMutation,
  actions: loginAction
}



export const store = new Vuex.Store({
  getters: {
    checkCarPortUser: function () {
      return localStorage.getItem('CarPortUserlogin') == 'false' ? false : true
    }
  },
  state: {
    messageText: '',
    selectedTreeNode: ''
  },
  modules: {
    login: loginModule
  }
})
