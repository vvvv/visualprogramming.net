<script setup>

import { ref, onMounted } from 'vue'
import { PUBLIC_USER_INFO_URL, ASSETS_URL } from '../constants'
import NamedField from './NamedField.vue'
import { isEmpty } from '../utils'

const props = defineProps(['username'])
const UserData = ref (null)
const imageParams = "?quality=90&fit=cover&width=120"

const url = `${PUBLIC_USER_INFO_URL}?username=${props.username}`


function getData()
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            UserData.value = data
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


</script>

<template>
    <a href="/community/users/#" class="btn btn-secondary">< List</a>
    <div v-if="UserData" class="UserInfo card">
        <h4 class="card-header">{{ UserData.User.username }}</h4>
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-md-3">
                    <img :src="`${ASSETS_URL}${UserData.User.profilepic}${imageParams}`" v-if="UserData.User.profilepic !== 'undefined'" class="rounded-circle img-fluid"/>
                    <div class="emptypic rounded-circle" v-else></div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <NamedField label="Real Name" :value="UserData.User.realname"/>
                            <NamedField label="Homepage" :value="UserData.User.homepage"/>
                        </div>
                        <div class="col-12 col-md-6">
                            <NamedField label="Github Account" :value="UserData.SocialNetworks.github"/>
                            <NamedField label="Nuget Account" :value="UserData.SocialNetworks.nuget"/>
                        </div>
                    </div>
                </div>
            </div>

            <NamedField label="Statement" :value="UserData.User.statement" class="mt-md-3"/>

            <div class="row" v-if="UserData.SocialNetworks.fields !='undefined'">
                <template v-for="f in UserData.SocialNetworks.fields">
                        <NamedField :label="f.key" :value="f.value" v-if="f.value != ''" class="col-12 col-md-6"/>
                </template>
            </div>

            <hr/>

            <template v-if="UserData.Hire != null">
                <NamedField label="Available for hire" :value="UserData.Hire.available ? 'Yes' : 'No'"/>
                <div class="row" v-if="UserData.Hire.available">
                    <div class="col-12 col-md-6">
                        <NamedField label="Description" :value="UserData.Hire.description"/>
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
            </template>
        </div>
    </div>
</template>