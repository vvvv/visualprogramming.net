<script setup>

import { ref, onMounted, watchEffect } from 'vue'
import { POST_WORKSFOR } from '../../constants'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../../utils'
import ActionButtons from './ActionButtons.vue'
import WorksForItem from './WorksForItem.vue'
import Spinner from '../Spinner.vue'

const props = defineProps(['data', 'keycloak'])
const emit = defineEmits(['reload', 'error'])

const data = ref({ companies: new Array(), edus: new Array()})

const constants = props.data.constants
var dataOriginal

const loading = ref(false)

onMounted(()=>{
    data.value.companies = pickEntities(props.data.user.User_Company, 'User_Company_id')
    data.value.edus = pickEntities(props.data.user.User_Edu, 'User_Edu_id')
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
    await post (POST_WORKSFOR, payload, token).catch ((err) => {
        emit('error', err)
    })

    loading.value = false;
    emit('reload')
}

</script>

<template>
    <template v-if="data">
        <div :class="loading ? 'disabled' : ''">
            <div class="row label d-none d-lg-flex">
                <div class="col-7">
                    Name
                </div>
                <div class="col-3">
                    Role
                </div>
                <div class="col-2">
                    Confirmed
                </div>
            </div>
            <template v-for="(c, index) in data.companies">
                <WorksForItem v-model="data.companies[index]"/>
                <hr class="col-12 my-2 d-flex d-lg-none"/>
            </template>
            <template v-for="(c, index) in data.edus">
                <WorksForItem v-model="data.edus[index]"/>
            </template>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <ActionButtons @save="save" @revert="revert"/>
            </div>
        </div>
    </template>
    <template v-else>
        <Spinner/>
    </template>
</template>