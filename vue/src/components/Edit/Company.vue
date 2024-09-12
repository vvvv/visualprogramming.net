<script setup>

import { ref, defineProps, onMounted, watch, watchEffect } from 'vue'
import { POST_UPDATE_COMPANY, POST_CREATE_COMPANY, ASSETS_URL, PROFILEPIC_PARAMS, DEFAULT_ENTITY_NAME } from '../../constants'
import { post, toJson, clone } from '../../utils'
import ActionButtons from './ActionButtons.vue'
import FieldEdit from './FieldEdit.vue'
import Employees from './Employees.vue'
import FileUploader from './FileUploader.vue'

const props = defineProps (['data', 'user', 'keycloak', 'constants'])
const emit = defineEmits(['reload', 'error', 'updateName'])

const data = ref(props.data)
const roles = props.constants.company_Roles
const loading = ref(false)
const image = ref()

var owner = {}
var persons = new Array()
var dataOriginal

onMounted (()=>{
    //Image
    if (props.data.entity.profilepic !== null)
    {
        image.value = `${ASSETS_URL}${props.data.entity.profilepic}${PROFILEPIC_PARAMS}`
    }

    //It's a new entity
    if (props.data.entity.uuid === null)
    {
        owner = {
            action: "add",
            email: props.user.email,
            role: 1
        }
    }
})

watchEffect(()=>{
    emit('updateName', data.value.entity.name)
})

watch(()=> props.data, (newData) => {
    if (newData !== null)
    {
        data.value = clone(newData)
        dataOriginal = data.value
    }
}, {immediate: true})


function revert()
{
    data.value = JSON.parse(dataOriginal)
}

function updatePersons(p)
{
    persons = p
}   

async function updateLogo(newImage)
{

    data.value.entity.profilepic = newImage.id
    image.value = `${ASSETS_URL}${newImage.id}${PROFILEPIC_PARAMS}`
    
    if (data.value.entity.uuid !== null)
    {
        const payload =
        {
            user_collection: "User_Company",
            entity_collection: "Company",
            uuid: data.value.entity.uuid,
            entity: {
                profilepic: newImage.id
            }
        }
        
        const token = await props.keycloak.getAccessToken()
        post(POST_UPDATE_COMPANY, payload, token).catch( (err) => {
            console.log (err)
        })
    }
}

async function save()
{
    // Validate
    try {
            persons.forEach((p) => {
                if (p.action == "add" & p.email == "")
                {
                    throw new Error ("E-Mail address is missing for a person")   
                }
            })

            if (data.value.entity.name == "" || data.value.entity.name == DEFAULT_ENTITY_NAME)
            {
                throw new Error ("Name of the Entity can't be empty or default")   
            }

    } catch (err) {
        emit('error', err.message)
        return
    }

    //POST_COMPANY
    loading.value = true

    var payload = {
        user_collection: "User_Company",
        entity_collection: "Company",
        uuid: data.value.entity.uuid,
        entity: {
            website: data.value.entity.website,
            profilepic: data.value.entity.profilepic,
            description: data.value.entity.description,
        },
        personnel: [...persons]
    }

    const token = await props.keycloak.getAccessToken()

    var url = ""

    if (payload.uuid === null)
    {
        url = POST_CREATE_COMPANY
        payload.personnel.push(owner)
        payload.entity.name = data.value.entity.name
    }
    else
    {
        url = POST_UPDATE_COMPANY
    }

    //console.log (payload)
    await post (url, payload, token).catch((err) =>
    {
        emit('error', err)
    })

    loading.value = false
    emit('reload')
}

</script>

<template>
    <div :class="loading ? 'disabled' : ''">
        <div class="row my-4">
            <div class="col-8 mr-auto">
                <span class="h4 pr-4">{{ data.entity.name }}</span> 
                <span class="badge badge-pill badge-primary py-1 px-2" :class="data.entity.status === 'confirmed' ? 'badge-success' : 'badge-warning'">{{ data.entity.status }}</span> 
            </div>
            <div clas=""></div>
        </div>

        <!-- Image -->
        <div class="row">
            <div class="col-12 text-center">
                <img v-if="image" :src="image"/>
                <div v-else class="emptypic center-block"></div>
                <div class="mt-2">
                    <FileUploader :keycloak="props.keycloak" title="Upload Logo" @response="updateLogo"/>
                </div>
            </div>
        </div>

        <!-- Name if NEW -->
        <template v-if="data.entity.uuid === null">
            <FieldEdit label="Name" v-model="data.entity.name" focus="true"/>
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