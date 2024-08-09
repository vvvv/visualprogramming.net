<script setup>

import { ref } from 'vue'
import { POST_HIRE } from '../../constants'
import FieldEdit from './FieldEdit.vue'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../../utils'
import ActionButtons from './ActionButtons.vue';
import Spinner from '../Spinner.vue';

const props = defineProps(['data', 'keycloak'])

const defaultData = {
    available: false,
    description: '',
    type: [],
    contact: ''
}

const data = ref(cleanup(props.data.user.value.Hire || defaultData))
const dataOriginal = toJson(data.value)
const constants = props.data.constants.value

const loading = ref(false)

function revert()
{
    data.value = JSON.parse(dataOriginal)
}

async function save()
{
    loading.value = true
    const payload = removeEmpty(data.value)
    const token = await props.keycloak.getAccessToken()
    post (POST_HIRE, payload, token, onResponse)
}

function onResponse(data)
{
    loading.value = false
    console.log (data)
}

function updateTypes(t)
{
    if (data.value.type.includes(t))
    {
        data.value.type = data.value.type.filter( (e) => e != t )
    }
    else
    {
        data.value.type.push(t)
    }
}


</script>

<template>
    <template v-if="data">
        <div :class="loading ? 'disabled' : ''">
            <div class="row mb-3">
                <div class="col-12">
                    <div class="btn-group btn-group-toggle">
                        <label class="btn" :class="data.available ? 'btn-secondary active' : 'btn-outline-secondary'">
                            <input type="radio" :checked="data.available" @click="data.available=!data.available"> Available
                        </label>
                        <label class="btn" :class="!data.available ? 'btn-secondary active' : 'btn-outline-secondary'">
                            <input type="radio" :checked="!data.available" @click="data.available=!data.available"> Not Available
                        </label>
                    </div>
                </div>
            </div>
            <div class="row" :class="data.available ? '' : 'disabled'">
                <div class="col-12">
                    <FieldEdit label="Description" v-model="data.description" :edit="edit" :multi="true"/>
                </div>
                <div class="col-lg-6">
                    <FieldEdit label="Contact" v-model="data.contact"/>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-12">
                            <div class="label">Available for:</div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <a v-for="t in constants.hire_Type" 
                                            href="#"
                                            @click="updateTypes(t.value)" 
                                            class="badge px-3 py-1 mr-2 mb-1" 
                                            :class="data.type.includes(t.value) ? 'badge-primary' : 'badge-secondary'">
                                        {{ t.text }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ActionButtons @save="save" @revert="revert"/>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <Spinner/>
    </template>
</template>