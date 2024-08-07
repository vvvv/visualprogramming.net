<script setup>

import { ref, watchEffect, onMounted, computed } from 'vue'
import { RETRIEVE_PROFILE_DATA, CONSTANTS_URL } from '../../constants'
import KC from '../../keycloak'
import EditHire from './EditHire.vue'
import EditBasics from './EditBasics.vue'
import EditNavi from './EditNavi.vue'
import Spinner from '../Spinner.vue'
import EditWorksFor from './EditWorksFor.vue'
import EditCompanies from './EditCompanies.vue'

const User = ref(null)
const Entities = ref(null)
const Constants = ref(null)
const activeSection = ref(null)
const currentRoute = ref('Basics')
var mainDiv = null
const data = { user: User, entities: Entities, constants: Constants }

var keycloak = null

const isLogged = ref(false)
const isReady = ref(false)
const prod = true;

const routes = {
    'Basics' : EditBasics,
    'For Hire' : EditHire,
    'Works for' : EditWorksFor,
    'Companies' : EditCompanies
}

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

async function getData()
{
    const token = await keycloak.getAccessToken()

    var body = JSON.stringify({
            Token: token,
        })

    fetch(RETRIEVE_PROFILE_DATA, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: body
    })
    .then((response) => {
        response.json().then((data) => {
            User.value = data.user
            Entities.value = { companies: data.companies, edus: data.edus }
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

function getUsername()
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
    //User.value = {"Basics":{"username":"antontest","name":"Anton M","homepage":"vvvv.org","statement":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","coordinates":"{\"coordinates\":[174.88597,-40.90056],\"type\":\"Point\"}","profilepic":{"image_id":"e1409088-c43c-4513-8acc-47f7973ba881"}},"Hire":{"available":true,"type":["remote"],"description":"fsfsdf sdf sd fasf asdf asdf a","date_created":"2024-07-31T08:41:27.000Z","date_updated":null},"SocialNetworks":{"fields":null,"nuget":null,"github":null,"date_updated":"2024-08-01T13:59:34.000Z","date_created":"2024-07-31T08:40:52.000Z"}}
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
        User.value = {"Basics":{"username":"antontest","name":"Anton M","homepage":"vvvv.org","statement":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","coordinates":"{\"coordinates\":[174.88597,-40.90056],\"type\":\"Point\"}","profilepic":{"image_id":"e1409088-c43c-4513-8acc-47f7973ba881"}},"Hire":{"available":true,"type":["remote"],"description":"fsfsdf sdf sd fasf asdf asdf a","date_created":"2024-07-31T08:41:27.000Z","date_updated":null},"SocialNetworks":{"fields":null,"nuget":null,"github":null,"date_updated":"2024-08-01T13:59:34.000Z","date_created":"2024-07-31T08:40:52.000Z"}}
    }

    mainDiv = document.getElementById('ProfileEditor')
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
    return User.value ? User.value.Basics.username : 'Profile' 
})

watchEffect(()=>{
    activeSection.value = routes[currentRoute.value]
})

const theme = ref(Boolean)

function switchTheme()
{
    theme.value = !theme.value
    mainDiv.classList.toggle("darkMode")
}

</script>

<template>
    <template v-if="isLogged">
        <button class="btn btn-sm btn-outline-secondary" @click="switchTheme">{{ theme ? "Light" : "Dark" }}</button>
        <div class="card mt-2 shadow profileCard">
            <div class="card-header">
                <div class="row mx-1">
                    <div class="h4 mr-auto">{{ Header }}</div>
                    <button class="btn btn-sm btn-outline-secondary" @click="logout" v-if="isLogged">Logout</button>
                </div>
            </div>    
            <hr/>
            <div class="row mx-1 mt-4">
                <template v-if="User && Constants">
                    <div class="col-12 col-md-5 col-lg-4 col-xl-3 flex-shrink-1">
                        <EditNavi v-model="currentRoute"/>
                    </div>
                    <div class="col-12 col-md-7 col-lg-8 col-xl-9 mb-4">
                        <component :is="activeSection" :data="data" :keycloak="keycloak"></component>
                        <ActionButtons />
                    </div>
                </template>
                <template v-else>
                    <div class="col">
                        <Spinner/>
                    </div>
                </template>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="card shadow profileCard">
            <div class="card-header">
                <div class="row mx-1">
                    <div class="h4 mr-auto">{{ Header }}</div>
                </div>
            </div>
            <div class="row mx-1 mt-4">
                <template v-if="isReady">
                    <div class="col"> 
                        <div>Login to edit the data</div>
                        <button class="btn btn-sm btn-secondary mt-2" @click="login">Login</button>
                    </div>
                </template>
                <template v-else>
                    <div class="col">
                        <Spinner/>
                    </div>
                </template>
            </div>
        </div>
    </template>
</template>