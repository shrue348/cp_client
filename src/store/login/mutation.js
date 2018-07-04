import Vue from 'vue'
import state from './state'
import action from './action'
import store from '../index'
import router from '../../router'
import host from '../../hosts.js'

export default {
  loginUser: function(state){
    state.loader = true

    return Vue.http.put(`${host.host}/Account/Login`, {
      login: state.login.user.replace('(', '').replace(')', '').replace('-', ''),
      password: state.login.password
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }).then(response => {
      let data = JSON.parse(response.bodyText)

      if (data.needConfirm == false) {
        state.loginToken = data.token.accessToken
        console.log("this")
        console.log(this)
        this.a.loadUser()

      } else {
        downTime()
        state.isSMSCode = true
        state.loader = false
        return toastr.info('Введите код из СМС')
      }


    }, response => {
      state.loader = false

      if (response.body.message == 'Invalid phone number!') return state.error('Некорректный номер телефона')
      if (response.body.message == 'Phone-Pass pair not found!') return state.error('Неверный логин или пароль')
      if (response.body.message == 'Invalid login or password!') return state.error('Неверный логин или пароль')
      if (response.body.message == 'The account is blocked!') return state.error('Аккаунт заблокирован')
      if (response.body.message == 'Account does not exists!') return state.error('Аккаунт не существует')
      if (response.body.message == 'User not found!') return state.error('Пользователь не найден')
      if (response.body.message == 'No permission!') return state.error('отказано в доступе')

      return state.error = response.body.message
    })


  },

  loadUser() {
    Vue.http.get(`${host.host}/User`, {
      headers: {
        'Authorization': 'Bearer ' + state.loginToken,
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }).then(response => {
      state.loader = false

      return window.location.href = '/garage'
    })
  }
}