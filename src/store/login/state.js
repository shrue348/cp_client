export default {
  token: localStorage.getItem('CarPortUserToken'),
  loginToken: '',
  login: {
    user: '',
    password: '',
    sms: ''
  },
  profile: {},
  error: '',
  loader: false,
  CarPortUserProfile: {
    firstName: '',
    lastName: ''
  },
  isNewCode: false,
  isTimer: false,
  downTimeMinute: 4,
  downTimeSeconds: 29,
  downTimes: '',
  loginToken: ''
}
