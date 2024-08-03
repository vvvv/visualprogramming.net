<script setup>

import { ref, watchEffect, onMounted, computed, defineModel } from 'vue'
import { PUBLIC_USER_INFO_URL, CONSTANTS_URL, ASSETS_URL } from '../constants'
import KC from '../keycloak'
import EditHire from './EditHire.vue'
import EditBasics from './EditBasics.vue'
import EditNavi from './EditNavi.vue'
import Spinner from './Spinner.vue'

const UserData = ref(null)
const Constants = ref(null)
var Original = null
var keycloak = null

const isLogged = ref(false)
const isReady = ref(false)
const prod = true;

function getConstants()
{
    fetch(CONSTANTS_URL)
    .then((response) => {
        response.json().then((data) => {
            Constants.value = data.Constants
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

function getData()
{
    fetch(PUBLIC_USER_INFO_URL + getName(), 
    { 
        cache: "no-store" 
    })
    .then((response) => {
        response.json().then((data) => {
            UserData.value = data.data[0]
            Original = JSON.stringify(data);
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

function getName()
{
    if (prod)
    {
        return keycloak.getUsername()     
    }
    return 'antontest'
}

onMounted(()=>
{
    //getData();
    //UserData.value = {"Basics":{"username":"antontest","name":"Anton M","homepage":"vvvv.org","statement":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","coordinates":"{\"coordinates\":[174.88597,-40.90056],\"type\":\"Point\"}","profilepic":{"image_id":"e1409088-c43c-4513-8acc-47f7973ba881"}},"Hire":{"available":true,"type":["remote"],"description":"fsfsdf sdf sd fasf asdf asdf a","date_created":"2024-07-31T08:41:27.000Z","date_updated":null},"SocialNetworks":{"fields":null,"nuget":null,"github":null,"date_updated":"2024-08-01T13:59:34.000Z","date_created":"2024-07-31T08:40:52.000Z"}}
    if (prod)
    {
        keycloak = new KC()
        keycloak.onAuth = ()=> {
            isLogged.value = true
            getConstants()
            getData()
        }
        keycloak.onReady = ()=> {
            isReady.value = true
        }
    }
    else
    {
        isLogged.value = true;
        isReady.value = true;
        UserData.value = {"Basics":{"username":"antontest","name":"Anton M","homepage":"vvvv.org","statement":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","coordinates":"{\"coordinates\":[174.88597,-40.90056],\"type\":\"Point\"}","profilepic":{"image_id":"e1409088-c43c-4513-8acc-47f7973ba881"}},"Hire":{"available":true,"type":["remote"],"description":"fsfsdf sdf sd fasf asdf asdf a","date_created":"2024-07-31T08:41:27.000Z","date_updated":null},"SocialNetworks":{"fields":null,"nuget":null,"github":null,"date_updated":"2024-08-01T13:59:34.000Z","date_created":"2024-07-31T08:40:52.000Z"}}
    }
})

const active = ref ("Basics")

var activeSection = EditBasics

watchEffect(()=>{
    if (active.value == "Basics")
    {
        activeSection = EditBasics
    }
    else
    {
        activeSection = EditHire
    }
})

function logout()
{
    keycloak.logout()
}

function login()
{
    keycloak.login(window.location.href)
}

const Header = computed(()=>{
    return UserData.value ? UserData.value.Basics.username : 'Profile' 
})

</script>

<template>
    <template v-if="isLogged">
        <div class="card">
            <div class="card-header">
                <div class="row mx-1">
                    <div class="h4 mr-auto">{{ Header }}</div>
                    <button class="btn btn-sm btn-outline-secondary" @click="logout" v-if="isLogged">Logout</button>
                </div>
            </div>    
            <hr/>
            <div class="card-body row">
                <template v-if="UserData && Constants">
                    <div class="col-12 col-md-5 col-lg-4 col-xl-3">
                        <EditNavi v-model="active"/>
                    </div>
                    <div class="col-12 col-md-7 col-lg-8 col-xl-9 mb-4">
                        <component :is="activeSection" :data="UserData" :constants="Constants" :keycloak="keycloak"></component>
                        <ActionButtons />
                    </div>
                </template>
                <template v-else>
                    <Spinner/>
                </template>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="card">
            <div class="card-header">
                <div class="row mx-1">
                    <div class="h4 mr-auto">{{ Header }}</div>
                </div>
            </div>
            <div class="card-body row">
                <template v-if="isReady">
                    <div class="col"> 
                        <div>Login to edit the data</div>
                        <button class="btn btn-sm btn-secondary mt-2" @click="login">Login</button>
                    </div>
                </template>
                <template v-else>
                    <Spinner/>
                </template>
            </div>
        </div>
    </template>
</template>