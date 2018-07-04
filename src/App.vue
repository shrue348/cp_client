<template>
  <v-app light>
    <v-container fluid>
      <v-navigation-drawer
        v-if="routeName != 'Login'"
        fixed
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        app
      >
        <Menu></Menu>
        
      </v-navigation-drawer>
      <v-toolbar color="blue-grey" fixed app dark :clipped-left="clipped" :clipped-right="clipped" v-if="routeName != 'Login'">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
        <v-btn
          icon
          dark
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          dark
          @click.stop="rightDrawer = !rightDrawer"
        >
          <v-icon>chat</v-icon>
        </v-btn>
      </v-toolbar>

      <router-view></router-view>

      <v-navigation-drawer
        v-if="routeName != 'Login'"
        v-model="rightDrawer"
        right
        temporary
        fixed
      >
        <v-list>
          <v-list-tile @click="right = !right">
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

    </v-container>

  </v-app>
</template>

<script>
  import Vue from 'vue'
  import host from './hosts.js'
  import Menu from './components/layouts/Menu'



  export default {
    data () {
      return {
        routeName: this.$route.name,
        cordova: Vue.cordova,
        host: host,
        title: 'Carport',
        clipped: true,
        drawer: true,
        miniVariant: false,
        right: true,
        rightDrawer: false,

      }
    },
    components: {
      Menu
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })

    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
