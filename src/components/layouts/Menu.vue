<template>
  <v-list>
    <v-list-tile
      :value="this.$route.path == '/garage/'"
      exact
      @click="goTo('/garage/')"
    >
      <v-list-tile-action>
        <v-icon light>directions_car</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Гараж</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      :value="this.$route.path == '/active_orders/'"
      exact
      @click="goTo('/active_orders/')"
    >
      <v-list-tile-action>
        <v-icon light>apps</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Заказы</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      :value="this.$route.path == '/profile/'"
      exact
      @click="goTo('/profile/')"
    >
      <v-list-tile-action>
        <v-icon light>person</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Профиль</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      :value="this.$route.path == '/notifications/'"
      exact
      @click="goTo('/notifications/')"
    >
      <v-list-tile-action>
        <v-icon light>notifications</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Уведомления</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      :value="this.$route.path == '/balance/'"      
      exact
      @click="goTo('/balance/')"
    >
      <v-list-tile-action>
        <v-icon light>account_balance_wallet</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Баланс</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      
      exact
      @click="goTo('/balance/')"
    >
      <v-list-tile-action>
        <v-icon light>exit_to_app</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Выход</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>


  </v-list>
</template>


<script>
  import Vue from 'vue'

  export default {
    name: 'Menu',
    data(){
      return {
        items: [{
          icon: 'bubble_chart',
          title: 'Гараж'
        }]
      }
    },
    methods: {
      goTo(page){
        this.$router.push(page)
      }
    },
    created() {
      console.log(this.$route)
    }
  }
</script>