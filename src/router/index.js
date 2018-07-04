import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Garage from '@/components/Garage'
import ActiveOrders from '@/components/ActiveOrders'
import Profile from '@/components/Profile'
import Notifications from '@/components/Notifications'
import Balance from '@/components/Balance'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/garage',
      name: 'Garage',
      component: Garage
    },
    {
      path: '/active_orders',
      name: 'ActiveOrders',
      component: ActiveOrders
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance
    }
  ]
})
