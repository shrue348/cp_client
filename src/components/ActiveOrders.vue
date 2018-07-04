<template>
  <v-content>
    <div class="display-1 font-weight-light">Активные заказ-наряды</div>

    
  </v-content>
</template>

<script>
  import Vue from 'vue'
  import host from './../hosts.js'
  
 
  export default {
    name: 'ActiveOrders',
    data(){
      return {
        cordova: Vue.cordova,
        host: host,
        
        title: 'Carport | Активные заказы'
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
