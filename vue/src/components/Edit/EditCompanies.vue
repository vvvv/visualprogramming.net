<script setup>

import { ref, onMounted, computed, watchEffect } from 'vue'
import Spinner from '../Spinner.vue';
import Entity from './Entity.vue';
import Dropdown from './Dropdown.vue';
import {DEFAULT_ENTITY_NAME} from '../../constants'

const emit = defineEmits(['reload', 'error'])
const props = defineProps(['data', 'keycloak'])
const data = ref(props.data.entities.value.companies)
const user = props.data.user.value.Basics
const index = ref(0)
const company = ref(data.value[0])
const constants = props.data.constants.value
const names = ref([])

watchEffect(()=>{
    if (data.value !== null)
    {
        console.log (data.value)
        names.value = data.value.map((c)=>{ return c.entity.name })
        company.value = data.value[index.value] 
    }
})

function addCompany()
{

    if (!names.value.includes(DEFAULT_ENTITY_NAME))
    {
        const newCompany={
            entity: {
                uuid: null,
                name: DEFAULT_ENTITY_NAME,
                profilepic: null,
                status: "",
                website: "",
                description: ""
            },
            users: []
        }
        data.value.push(newCompany)
        index.value = data.value.length - 1
    }
}

</script>

<template>
    <template v-if="data">
        <div :class="loading ? 'disabled' : ''">
            <div class="row text-right mb-3">
                    <Dropdown v-if="data.length > 1" :index="index" :values="names" :update="(i) => index=i"/>
                    <button class="btn btn-sm btn-outline-secondary ml-2" 
                            @click="addCompany">
                    Add Company
                    </button>
            </div>
            <hr>
            <Entity :data="company" 
                    :user="user" 
                    :keycloak="props.keycloak" 
                    :constants="constants" 
                    :key="index" 
                    @reload="emit('reload')" 
                    @error="(e)=>emit('error', e)"/>
        </div>
    </template>
    <template v-else>
        <Spinner/>
    </template>
</template>