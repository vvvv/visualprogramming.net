<script setup>

import { ref, watchEffect, onMounted, computed, defineModel } from 'vue'
import { PUBLIC_USER_INFO_URL, ASSETS_URL } from '../constants'
import EditHire from './EditHire.vue'
import EditBasics from './EditBasics.vue'
import EditNavi from './EditNavi.vue'


const windowURL = new URL(window.location.href)
const params = windowURL.searchParams
const username = params.get("user")

const UserData = ref(null)
var Original = null
const url = `${PUBLIC_USER_INFO_URL}${username}`

function revert()
{
    UserData.value = JSON.parse(Original)
}

function getData()
{
    fetch(url)
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

onMounted(()=>
{
    //getData();
    UserData.value = {"Basics":{"username":"antontest","name":"Anton M","homepage":"vvvv.org","statement":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","coordinates":"{\"coordinates\":[174.88597,-40.90056],\"type\":\"Point\"}","profilepic":{"image_id":"e1409088-c43c-4513-8acc-47f7973ba881"}},"Hire":{"available":true,"type":["remote"],"description":"fsfsdf sdf sd fasf asdf asdf a","date_created":"2024-07-31T08:41:27.000Z","date_updated":null},"SocialNetworks":{"fields":null,"nuget":null,"github":null,"date_updated":"2024-08-01T13:59:34.000Z","date_created":"2024-07-31T08:40:52.000Z"}}
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
    window.location.href='/community/?user=' + UserData.value.Basics.username
}

</script>

<template>
    <div v-if="UserData" class="card">
        <div class="card-header">
            <div class="row mx-1">
                <div class="h4 mr-auto">{{ UserData.Basics.username }}</div>    
                <button class="btn btn-sm btn-secondary-outline" @click="logout">Logout</button>
            </div>
        </div>    

        <hr/>

        <div class="card-body row">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3">
                <EditNavi v-model="active"/>
            </div>
            <div class="col-12 col-md-7 col-lg-8 col-xl-9 mb-4">
                <component :is="activeSection" :data="UserData"></component>
                <ActionButtons />
            </div>
        </div>
    </div>
</template>