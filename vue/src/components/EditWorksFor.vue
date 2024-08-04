<script setup>

import { ref, onMounted, computed } from 'vue'
import { POST_WORKSFOR } from '../constants'
import FieldEdit from './FieldEdit.vue'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../utils'
import ActionButtons from './ActionButtons.vue';
import Spinner from './Spinner.vue';

const props = defineProps(['data', 'keycloak'])

const data = ref(new Array())

var constants
var dataOriginal

const loading = ref(false)

onMounted(()=>{
    constants = props.data.constants.value

    data.value = data.value.concat(pickEntities(props.data.basics.value.User_Company, 'User_Company_id'))
    data.value = data.value.concat(pickEntities(props.data.basics.value.User_Edu, 'User_Edu_id'))
    dataOriginal = toJson(data.value)
})

function pickEntities(elements, rootElement)
{
    var res = new Array()
    if (elements)
    {
        for (var e of elements)
        {
            const c = e[rootElement]
            const role = constants.company_Roles[c.role-1].role
            res.push({role: role, name: c.entity.name, confirmed: false}) 
        }
    }
    return res
}

function revert()
{
    data.value = JSON.parse(dataOriginal)
}

async function save()
{
    loading.value = true
    const payload = data.value.map ((e)=>({
        uuid: e.uuid,
        confirmed: e.confirmed
    }))
    const token = await props.keycloak.getAccessToken()
    post (POST_WORKSFOR, payload, token, onResponse)
}

function onResponse(data)
{
    loading.value = false
    console.log (data)
}

</script>

<template>
    <template v-if="data">
        <div :class="loading ? 'disabled' : ''">
            <div v-for="d in data" class="row align-items-center">
                <div class="col-12 col-lg-3">
                    <span> {{ d.name }}</span>
                </div>
                <div class="col-12 col-lg-3">
                    {{ d.role }}
                </div>
                <div class="col-12 col-lg-3 text-lg-right">
                    <span class="mr-2">Confirmed:</span>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="btn-group btn-group-sm btn-group-toggle">
                        <label class="btn" :class="d.confirmed ? 'btn-secondary active' : 'btn-outline-secondary'">
                            <input type="radio" :checked="d.confirmed" @click="d.confirmed=!d.confirmed"> Yes
                        </label>
                        <label class="btn" :class="!d.confirmed ? 'btn-secondary active' : 'btn-outline-secondary'">
                            <input type="radio" :checked="!d.confirmed" @click="d.confirmed=!d.confirmed"> No
                        </label>
                    </div>
                </div>
                <hr class="d-block d-lg-none"/>
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