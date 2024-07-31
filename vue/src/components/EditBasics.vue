<script setup>

import { ref, watchEffect, onMounted, computed } from 'vue'
import { PUBLIC_USER_INFO_URL, ASSETS_URL } from '../constants'
import FieldEdit from './FieldEdit.vue'
import { isEmpty } from '../utils'

var Original = null

var model = defineModel()

function revert()
{
    model.value = JSON.parse(Original)
}

watchEffect(()=>{
    console.log (model.value)
})


</script>

<template>
    <div class="row">
        <div class="col-12 col-sm-3">
            <img :src="`${ASSETS_URL}${model.User.profilepic}${imageParams}`" v-if="model.User.profilepic !== 'undefined'" class="rounded-circle img-fluid"/>
            <div class="emptypic rounded-circle" v-else></div>
        </div>
        <div class="col-12 col-sm-9">
            <div class="row">
                <div class="col-12 col-md-6">
                    <FieldEdit label="Real Name" v-model="model.User.realname" :edit="edit"/>
                    <FieldEdit label="Homepage" v-model="model.User.homepage" :edit="edit"/>
                </div>
                <div class="col-12 col-md-6">
                    <FieldEdit label="Github Account" v-model="model.SocialNetworks.github" :edit="edit"/>
                    <FieldEdit label="Nuget Account" v-model="model.SocialNetworks.nuget" :edit="edit"/>
                </div>
            </div>
        </div>
    </div>

    <FieldEdit label="Statement" v-model="model.User.statement" class="mt-md-3" :edit="edit" multi="true"/>

    <div class="row" v-if="model.SocialNetworks.fields !='undefined'">
        <template v-for="f in model.SocialNetworks.fields">
                <FieldEdit :label="f.key" v-model="f.value" class="col-12 col-md-6" :edit="edit"/>
        </template>
    </div>   
</template>