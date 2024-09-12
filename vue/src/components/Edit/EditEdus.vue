<script setup>

import { ref, onMounted, computed, watch, watchEffect } from 'vue'
import Spinner from '../Spinner.vue';
import EduInstitution from './EduInstitution.vue';
import Dropdown from './Dropdown.vue';
import {DEFAULT_ENTITY_NAME} from '../../constants'

const emit = defineEmits(['reload', 'error'])
const props = defineProps(['data', 'keycloak'])
const data = ref(null)
const edu = ref(null)
const user = props.data.user.Basics
const index = ref(0)
const constants = props.data.constants
const names = ref([])

watchEffect(()=>{
    if (data.value !== null)
    {
        edu.value = data.value[index.value] 
    }
})

watch(() => props.data.entities.edus, (newValue) => {
    data.value = newValue
    names.value = newValue.map((c)=>{ return c.entity.name })
    edu.value = data.value[index.value]
}, {immediate: true})

function updateName(name)
{
    names.value[index.value] = name
}

function addEdu()
{

    if (!names.value.includes(DEFAULT_ENTITY_NAME))
    {
        const newEdu={
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
        data.value.push(newEdu)
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
                            @click="addEdu">
                    Add Institution
                    </button>
            </div>
            <hr>
            <EduInstitution :data="edu" 
                    :user="user" 
                    :keycloak="props.keycloak" 
                    :constants="constants" 
                    :key="index"
                    @updateName="updateName"
                    @reload="emit('reload')" 
                    @error="(e)=>emit('error', e)" v-if="data.length > 0"/>
        </div>
    </template>
    <template v-else>
        <Spinner/>
    </template>
</template>