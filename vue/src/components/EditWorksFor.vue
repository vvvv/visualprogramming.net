<script setup>

import { ref, onMounted, watchEffect } from 'vue'
import { POST_WORKSFOR } from '../constants'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../utils'
import ActionButtons from './ActionButtons.vue'
import WorksForItem from './WorksForItem.vue'
import Spinner from './Spinner.vue'


const props = defineProps(['data', 'keycloak'])

const data = ref({ companies: new Array(), edus: new Array()})

var constants
var dataOriginal

const loading = ref(false)

onMounted(()=>{
    constants = props.data.constants.value

    data.value.companies = pickEntities(props.data.basics.value.User_Company, 'User_Company_id')
    data.value.edus = pickEntities(props.data.basics.value.User_Edu, 'User_Edu_id')
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
            if (c !== null)
            {
                if (c.role > 1)
                {
                    const role = constants.company_Roles[c.role-1].role
                    res.push({role: role, name: c.entity.name, uuid: c.uuid, confirmed: c.confirmed}) 
                }
            }
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

    const companies = data.value.companies.map ((e)=>({
        collection: 'User_Company',
        uuid: e.uuid,
        confirmed: e.confirmed
    }))

    const edus = data.value.edus.map ((e)=>({
        collection: 'User_Edu',
        uuid: e.uuid,
        confirmed: e.confirmed
    }))

    const payload = companies.concat(edus)

    const token = await props.keycloak.getAccessToken()
    post (POST_WORKSFOR, payload, token, onResponse)
}

function onResponse()
{
    loading.value = false
}


</script>

<template>
    <template v-if="data">
        <div :class="loading ? 'disabled' : ''">
            <div class="h4">Companies</div>
            <div v-for="(c, index) in data.companies" class="mb-2">
                <WorksForItem v-model="data.companies[index]"/>
                <hr v-if="index+1 < data.companies.length" class="mt-4"/>
            </div>
            
            <hr v-if="data.edus.length > 0" class="my-4"/>
            <div class="h4">Educational Institutions</div>
            <div v-for="(c, index) in data.edus" class="mb-2">
                <WorksForItem v-model="data.edus[index]"/>
                <hr v-if="index+1 < data.length" class="mt-4"/>
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