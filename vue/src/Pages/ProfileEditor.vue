<script setup>
import Keycloak from 'keycloak-js'
import Form from './components/Form.vue'
import { LOGIN_OPTIONS, LOGIN_REDIRECT } from '../constants'

import { ref, onMounted } from 'vue'

const initOptions = LOGIN_OPTIONS

const keycloak = new Keycloak(initOptions)
const logged = ref(false);
const initCompleted = ref(false);

const refreshToken = ref ();

keycloak.onAuthSuccess = () =>{
    logged.value = true;
    initCompleted.value = true;
    refreshToken.value = keycloak.refreshToken;
    try{
        window.vvvvQuery(
        { 
          request: 'sendToVL',
          arguments: { "refreshToken": keycloak.refreshToken, "accessToken": keycloak.token }
        });
    }
    catch{}
}

keycloak.onReady = (auth) =>
{
  if (auth) 
  {
    logged.value = true;
  }
}

function logout ()
{
  keycloak.logout({redirectUri: LOGIN_REDIRECT })
} 

function login ()
{
  keycloak.login()
}

function init(tokens)
{
  try {
    if (tokens !== null )
    {
      keycloak.init({onLoad: initOptions.onLoad, token: tokens.at, refreshToken: tokens.rt, checkLoginIframe: false})
    }
    else
    {
      keycloak.init({onLoad: initOptions.onLoad})
    }
  }
  catch {
    console.log ("Can't init Keycloak")
  }
}

onMounted(() => {

  try{
    window.vvvvQuery(
    { 
      request: 'init',
      onSuccess: function(data) {
        init (JSON.parse(data));
      }
    })
  }
  catch {
    init (null);
  }

})
</script>

<template>
  <h1>Profile Editor</h1>
  
  <template v-if="initCompleted">
      <a @click="logout" v-if="logged" class="btn btn-secondary btn-lg mt-4">Logout</a>
      <template v-if="logged">
        <Users />
        <Form :keycloak="keycloak" />
      </template>
    </template>
    <button @click="login" v-else="!logged" class="btn btn-secondary btn-lg mt-4">Login</button>
</template>