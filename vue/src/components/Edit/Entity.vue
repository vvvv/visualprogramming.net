<script setup>

import { ref, defineProps, onMounted } from 'vue'
import { POST_UPDATE_COMPANY, POST_CREATE_COMPANY, ASSETS_URL, PROFILEPIC_PARAMS } from '../../constants'
import { post, toJson, clone } from '../../utils'
import ActionButtons from './ActionButtons.vue'
import FieldEdit from './FieldEdit.vue'
import Employees from './Employees.vue'
import FileUploader from './FileUploader.vue'

const props = defineProps (['data', 'keycloak', 'constants'])

const data = ref(clone(props.data))
const dataOriginal = toJson(data.value)
const roles = props.constants.company_Roles
const loading = ref(false)
const image = ref()

var persons = new Array()

onMounted (()=>{
    //Image
    if (data.value.entity.profilepic !== null)
    {
        image.value = `${ASSETS_URL}${data.value.entity.profilepic}${PROFILEPIC_PARAMS}`
    }
})


function revert()
{
    data.value = JSON.parse(dataOriginal)
}

function updatePersons(p)
{
    persons = p
    console.log (p)
}   

async function updateLogo(newImage)
{

    data.value.entity.profilepic = newImage.id
    image.value = `${ASSETS_URL}${newImage.id}${PROFILEPIC_PARAMS}`
    
    if (data.value.entity.uuid !== "")
    {
        const payload =
        {
            collection: "User_Company",
            uuid: data.value.entity.uuid,
            entity: {
                profilepic: newImage.id
            }
        }
        
        const token = await props.keycloak.getAccessToken()
        post(POST_UPDATE_COMPANY, payload, token)
    }
}

async function save()
{
    //POST_COMPANY
    loading.value = true

    var payload = {
        collection: "User_Company",
        uuid: data.value.entity.uuid,
        entity: {
            website: data.value.entity.website,
            profilepic: data.value.entity.profilepic,
            description: data.value.entity.description,
        },
        personnel: persons
    }

    const token = await props.keycloak.getAccessToken()
    const url = payload.uuid === null ? POST_CREATE_COMPANY : POST_UPDATE_COMPANY

    //console.log (payload)
    post (url, payload, token, ()=>{ loading.value = false })
    
}

</script>

<template>
    <div :class="loading ? 'disabled' : ''">
        <div class="row mb-4">
            <div class="col-8 mr-auto">
                <span class="h4 pr-4">{{ data.entity.name }}</span> 
                <span class="badge badge-pill badge-primary">{{ data.entity.status }}</span> 
            </div>
            <div clas=""></div>
        </div>

        <!-- Image -->
        <div class="row">
            <div class="col-12 text-center">
                <img v-if="image" :src="image"  class="rounded-circle"/>
                <div v-else class="emptypic rounded-circle center-block"></div>
                <div class="mt-2">
                    <FileUploader :keycloak="props.keycloak" title="Upload Logo" @response="updateLogo"/>
                </div>
            </div>
        </div>

        <!-- Name if NEW -->
        <template v-if="data.entity.uuid === null">
            <FieldEdit label="Name" v-model="data.entity.name"/>
        </template>

        <!-- Website -->
        <FieldEdit label="Website" v-model="data.entity.website"/>

        <!-- Description -->
        <div class="label">Description</div>
        <textarea class="form-control form-control-sm" rows="5" v-model="data.entity.description">{{ data.entity.description }}</textarea>

        <hr class="my-4"/>

        <!-- Employees -->
        <div class="h4">Personnel</div>
        <div class="row mb-3">
            <Employees :data="data.users" :entityId="data.entity.id" :roles="roles" @update="updatePersons"/>
        </div>

        <div class="row">
            <div class="col-12">
                <ActionButtons @save="save" @revert="revert"/>
            </div>
        </div>
    </div>
</template>