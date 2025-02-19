<script setup>

import Basics from './components/Basics.vue'
import Company from './components/Company.vue'
import Hire from './components/Hire.vue'
import { ref, shallowRef, onMounted, watchEffect } from 'vue'
import axios from 'axios'
import Constants from './constants'
import KC from '../src/keycloak'

var keycloak = null
var mail = null
var username = null

const data = ref(null)
const loading = ref(false)
const constants = ref(null)
const dataLoaded = ref (false)
const failure = ref (null)
const newProfile = ref (false)
const selected = shallowRef(Basics)
const menu = {
  "Basics": Basics,
  "Hire": Hire,
  "Company": Company
}

const itemClass = ref ('item')
const selectedClass = ref ('selected')

const emptyProfile = {
  user:{},
  hide:{},
  companies: {},
  edu: {},
  social: {}
}

const loadConstants = async () => {
  const res = await axios.get(Constants.GETCONSTANTS)
  if (res.status != 200)
  {
    throw (res.data.message) 
  }
  else
  {
    constants.value = res.data
  }
}

const reload = async () =>{
  const token = await keycloak.getAccessToken()
  const res = await axios.post(Constants.GETUSERINFO, {token: token})
  if (res.status != 200)
  {
    if (res.data.code == 1)
    {
      data.value = emptyProfile
      newProfile.value = true
      data.value.user.username = keycloak.getUsername()
      data.value.user.email = keycloak.getMail()
    }
  }
  else
  {
    data.value = res.data
  }
}

onMounted( async ()=> {
  keycloak = new KC()

  keycloak.onAuth = async ()=> {
    loading.value = true;
    try{
      mail = keycloak.getMail()
      await reload()
      await loadConstants()
      dataLoaded.value = true
    }
    catch (error) {
      failure.value = "Can't get data, please try login later."
    }
    finally{
      loading.value = false;
    }
  }
  
  // keycloak.onReady = ()=> {
  // }

})

const login = ()=> {
  keycloak.login(window.location.href)
}

const logout = ()=> {
  keycloak.logout()
}

</script>

<template>
  <div id="profile" class="container">
    <template v-if="data == null && !loading">
    <Vueform>
      <ButtonElement name="login" button-label="Login" @click="login"/>
    </Vueform>
    </template>
    <template v-if="loading">
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </template>
    <div v-if="failure" class="mt-4">{{ failure }}</div>
    <template v-if="dataLoaded">
      <div class="row mb-2">
        <div class="col">
          <div class="h1">{{ data.user.username }}</div>
        </div>
        <div class="col-1">
          <div class="vf-btn vf-btn-secondary" @click="logout">Logout</div>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-12 col-md-3 mb-md-0 mb-5 menu">
          <template v-for="item in Object.keys(menu)">
            <div :class="[itemClass, selected==menu[item] ? selectedClass : '']" @click="selected=menu[item]">{{item}}</div>
          </template>
        </div>
        <div class="col-12 col-md-8 ml-md-1">
            <component :is="selected" :data="data" :constants="constants" :keycloak="keycloak" :reload="reload" @reload="reload"/>
        </div>
      </div>
    </template>
  </div>
</template>