<script setup>

import { ref, watchEffect, onMounted, computed } from 'vue'
import { PUBLIC_USER_INFO_URL, ASSETS_URL } from '../constants'
import { isEmpty } from '../utils'
import EditHire from './EditHire.vue'
import EditBasics from './EditBasics.vue'
import EditNavi from './EditNavi.vue'


const windowURL = new URL(window.location.href)
const params = windowURL.searchParams
const username = params.get("user")

const UserData = ref(null)
var Original = null
const imageParams = "?quality=90&fit=cover&width=120"
const url = `${PUBLIC_USER_INFO_URL}?username=${username}`

function revert()
{
    UserData.value = JSON.parse(Original)
}

function getData()
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            UserData.value = data
            Original = JSON.stringify(data);
        })
    })
    .catch((err) => {
        console.error(err);
    });

    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            UserData.value = data
            Original = JSON.stringify(data);
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

onMounted(()=>
{
    //getData();
    UserData.value = {"Hire":{"type":"undefined","available":"undefined","description":"undefined"},"User":{"email":"florian.geierstanger@web.de","homepage":null,"realname":null,"username":"fgeierst","statement":null,"profilepic":"undefined","coordinates":null},"SocialNetworks":{"nuget":"undefined","fields":"undefined","github":"undefined"}}
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
    window.location.href='/community/?user=' + UserData.value.User.username
}

</script>

<template>
    <div v-if="UserData" class="card">
        <div class="card-header">
            <div class="row mx-1">
                <div class="h4 mr-auto">{{ UserData.User.username }}</div>    
                <button class="btn btn-sm btn-secondary-outline" @click="logout">Logout</button>
            </div>
        </div>    

        <hr/>

        <div class="card-body row">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3">
                <EditNavi v-model="active"/>
            </div>
            <div class="col-12 col-md-7 col-lg-8 col-xl-9 mb-4">
                <component :is="activeSection" v-model="UserData"></component>
                <hr class="my-3"/>
                <button class="btn btn-sm btn-primary mr-4 px-4" @click="update">Update</button>
                <button class="btn btn-sm btn-outline-secondary px-2" @click="revert">Revert</button>
            </div>
        </div>
    </div>
</template>