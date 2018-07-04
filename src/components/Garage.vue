<template>
  <v-content>
    <div class="display-1 font-weight-light">Гараж</div>



    <div>
      <v-alert
        :value="true"
        type="success"
      >
        This is a success alert.
      </v-alert>

      <v-alert
        :value="true"
        type="info"
      >
        This is a info alert.
      </v-alert>

      <v-alert
        :value="true"
        type="warning"
      >
        This is a warning alert.
      </v-alert>

      <v-alert
        :value="true"
        type="error"
      >
        This is a error alert.
      </v-alert>


    </div>
  </v-content>
</template>

<script>
  import Vue from 'vue'
  import host from './../hosts.js'
  
 
  export default {
    name: 'Garage',
    data(){
      return {
        cordova: Vue.cordova,
        host: host,
        
        title: 'Carport | Гараж'
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
