<script setup>

import { ref, watchEffect, onMounted, computed } from 'vue'
import { PUBLIC_USER_INFO_URL, ASSETS_URL } from '../constants'
import Field from './Field.vue'
import { isEmpty } from '../utils'

const props = defineProps(['username'])
const UserData = ref(null)
const imageParams = "?quality=90&fit=cover&width=120"
const url = `${PUBLIC_USER_INFO_URL}${props.username}`

function getData()
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            UserData.value = data.data[0]
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

onMounted(()=>
{
    getData();
    //UserData.value = {"Hire":{"type":"undefined","available":"undefined","description":"undefined"},"User":{"email":"florian.geierstanger@web.de","homepage":null,"realname":null,"username":"fgeierst","statement":null,"profilepic":"undefined","coordinates":null},"SocialNetworks":{"nuget":"undefined","fields":"undefined","github":"undefined"}}
})

function edit(username)
{
    window.location.href = '/community/users/profile?user='+ username
}


</script>

<template>
    <a href="/community/users/#" class="btn btn-secondary">< List</a>
    <div v-if="UserData" class="card mt-3">
        <div class="card-header">
            <div class="row mx-1">
                <div class="h4 mr-auto">{{ UserData.Basics.username }}</div>
                <button class="btn btn-sm btn-primary px-2" @click="edit(UserData.Basics.username)">Edit</button>    
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-md-3">
                    <img :src="`${ASSETS_URL}${UserData.Basics.profilepic.image_id}${imageParams}`" v-if="UserData.Basics.profilepic !== 'undefined'" class="rounded-circle img-fluid"/>
                    <div class="emptypic rounded-circle" v-else></div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <Field label="Real Name" v-model="UserData.Basics.name"/>
                            <Field label="Homepage" v-model="UserData.Basics.homepage"/>
                        </div>
                        <div class="col-12 col-md-6">
                            <Field label="Github Account" v-model="UserData.SocialNetworks.github"/>
                            <Field label="Nuget Account" v-model="UserData.SocialNetworks.nuget"/>
                        </div>
                    </div>
                </div>
            </div>

            <Field label="Statement" v-model="UserData.Basics.statement" class="mt-md-3" multi="true"/>

            <div class="row" v-if="UserData.SocialNetworks.fields !='undefined'">
                <template v-for="f in UserData.SocialNetworks.fields">
                        <Field :label="f.key" v-model="f.value" class="col-12 col-md-6"/>
                </template>
            </div>

            <hr/>

            <template v-if="UserData.Hire != null">
                <template v-if="edit">
                    <input type="checkbox" v-model="UserData.Hire.available"/>
                    <span class="label">Available for Hire</span>
                </template>
                <template v-else>
                    <div v-if="UserData.Hire.available">Available for Hire</div>
                </template>
                <fieldset :disabled="!UserData.Hire.available">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <Field label="Description" v-model="UserData.Hire.description" :multi="true"/>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="field">
                                <div class="label">
                                    Available for:
                                </div>
                                <div class="value">
                                    <template v-for="(t, index) in UserData.Hire.type" v-if="UserData.Hire.type!='undefined'">
                                        <span>{{ isEmpty(t) }}</span><template v-if="index+1 < UserData.Hire.type.length">, </template>
                                    </template>
                                    <span v-else>---</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </fieldset>
            <hr/>
            </template>
        </div>
    </div>
</template>