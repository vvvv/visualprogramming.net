<script setup>
import { ref, watchEffect } from 'vue'
import Basics from './Basics.vue'
import { constants } from '../constants'

import axios from 'axios'

const base_url = `https://data.vvvv.org/` 


const props = defineProps(['keycloak'])

const user = ref(null)
const social = ref(null)
const loading = ref(false)

async function get()
{

  var token = await props.keycloak.updateToken(-1)

  if (token)
  {  
    axios.post(base_url+get_url,{
      Token: props.keycloak.token 
    }).then( (res) => {
      user.value = res.data.Profile.User;
      social.value = res.data.Profile.SocialNetworks;
    }).catch((error)=> {
      console.log (error) 
    })
  }
} 

async function push(data)
{
  //alert (data.data.username)
  loading.value = true
}

</script>

<template>

  <button @click="get">Get</button>
  <Basics :userData = "user" :socialData = "social" :loading = "loading" v-if="user !== null" @save="push"/>

</template>
