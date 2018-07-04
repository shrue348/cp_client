<template>
  <v-content>
    <div class="display-1 font-weight-light">Баланс</div>

  </v-content>
</template>

<script>
  import Vue from 'vue'
  import host from './../hosts.js'
  
 
  export default {
    name: 'Balance',
    data(){
      return {
        cordova: Vue.cordova,
        host: host,
        
        title: 'Carport | Баланс'
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
