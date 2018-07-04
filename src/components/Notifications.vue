<template>
  <v-content>
    <div class="display-1 font-weight-light">Уведомления</div>

  </v-content>
</template>

<script>
  import Vue from 'vue'
  import host from './../hosts.js'
  
 
  export default {
    name: 'Notifications',
    data(){
      return {
        cordova: Vue.cordova,
        host: host,
        
        title: 'Carport | Уведомления'
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
