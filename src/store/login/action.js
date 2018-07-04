export default {
  login: ({ commit }) => {
    commit('loginUser')
  },
  downTime: ({ commit }) => {
    commit('downTime')
  },
  sendSms: ({ commit }) => {
    commit('sendSms')
  },
  sendNewSms: ({ commit }) => {
    commit('sendNewSms')
  },
  sendProfile: ({ commit }) => {
    commit('sendProfile')
  },
  loadUser: ({ commit }) => {
    commit('loadUser')
  }
}