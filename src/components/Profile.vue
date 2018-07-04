<template>
  <v-content>
    <div class="display-1 font-weight-light">Профиль</div>

  </v-content>
</template>

<script>
  import Vue from 'vue'
  import host from './../hosts.js'
  
 
  export default {
    name: 'Profile',
    data(){
      return {
        cordova: Vue.cordova,
        host: host,
        
        title: 'Carport | Профиль'
      }
    },
    components: {

    },
    created() {
      
    },
    methods: {

    }
  }
</script>

<style>

</style>
