<template>
 
  
    <v-container fluid fill-height>
      <v-layout align-center justify-center>

        <v-flex xs12 sm8 md4 lg3 xl2 v-if="!loader">
          <v-layout align-center justify-center class="mb-5">
            <img src="../../static/img/logo.png" alt="">
          </v-layout>
        
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="phone" name="login" label="Номер телефона" type="text" browser-autocomplete="off" v-model="login.user"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password" type="password" v-model="login.password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn flat small>Забыли пароль?</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="login.user == '' || login.password == ''" @click="loginUser">Войти</v-btn>
          </v-card-actions>
        
          <v-card-actions>
            <v-btn color="success" block>Регистрация</v-btn>
          </v-card-actions>

          <v-card-actions v-if="$store.state.login.error.length > 0">
            <v-alert
              :value="true"
              type="error"
              class="block"
            >
              {{$store.state.login.error}}
            </v-alert>
          </v-card-actions>
        </v-flex>

        <v-flex xs12 sm8 md4 lg3 xl2 v-else>Загрузка</v-flex>
        
      </v-layout>
    </v-container>
</template>


<script>
  import Vue from 'vue'
  import host from './../hosts.js'


  export default {
    data () {
      return {
        cordova: Vue.cordova,
        host: host,
        title: 'Carport | Вход/Регистрация',
        loader: false,
        loginToken: '',
        login: {
          user: '',
          password: '',
          sms: ''
        },
        error: ''
      }
    },
    
    methods: {
      loginUser(){
        this.loader = true

        this.$http.put(`${host.host}/Account/Login`, {
          login: this.login.user.replace('(', '').replace(')', '').replace('-', ''),
          password: this.login.password
        }, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
          }
        }).then(response => {
          let data = JSON.parse(response.bodyText)

          if (data.needConfirm == false) {
            this.loginToken = data.token.accessToken
            this.loadUser()

          } else {
            downTime()
            state.isSMSCode = true
            state.loader = false
            return toastr.info('Введите код из СМС')
          }


        }, response => {
          this.loader = false
          return this.error = response.body.message
        })


      },

      loadUser() {
        this.$http.get(`${host.host}/User`, {
          headers: {
            'Authorization': 'Bearer ' + this.loginToken,
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
          }
        }).then(response => {
          this.loader = false

          return window.location.href = '/garage'
        })
      }
    },
    created () {

    }
  }
</script>