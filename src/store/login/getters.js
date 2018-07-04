import state from './state'

export default {
  isFullForm: (state) => {
    if (state.login.user == '' || state.login.password == '') return false
    else return true
  },
  isSMSForm: (state) => {
    if (state.login.sms == '') return true
    else return false
  }
}