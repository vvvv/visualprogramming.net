<script setup>

import { ref, watchEffect, onMounted } from 'vue'
import { ASSETS_URL, POST_BASISC, POST_SOCIAL, PROFILEPIC_PARAMS } from '../../constants'
import { cleanup, post, removeEmpty, toJson, removeProps } from '../../utils'
import FieldEdit from './FieldEdit.vue'
import ActionButtons from './ActionButtons.vue';
import SetPositionMap from './SetPositionMap.vue';
import Spinner from '../Spinner.vue';
import FileUploader from './FileUploader.vue';

const props = defineProps(['data', 'keycloak'])
const emit = defineEmits(['error'])

const basicsData = ref(cleanup(props.data.user.value.Basics))
const socialData = ref(cleanup(props.data.user.value.SocialNetworks))

const basicsOriginal = toJson(basicsData.value)
const socialOriginal = toJson(socialData.value)

const loading = ref(false)
const address = ref(null)
const image = ref()

const showMap = false

onMounted(()=>{
    
    //Map
    basicsData.value.coordinates = {coordinates: [0,0], type: "Point"}


    //Social Data
    const EmptyField = { key: '', value: '' }

    if (socialData.value.fields !== null)
    {
        var f = socialData.value.fields

        f = new Array(4).fill().map ((index) => { 
            f[index] != null || f[index] != 'undefined' ? f[index] : Object.create(EmptyField)  
        })
    }
    else
    {
        socialData.value.fields = new Array(4).fill().map( (obj) => Object.create(EmptyField))
    }

    //Image
    if (basicsData.value.profilepic !== null)
    {
        image.value = `${ASSETS_URL}${basicsData.value.profilepic}${PROFILEPIC_PARAMS}`
    }
})

function revert()
{
    basicsData.value = JSON.parse(basicsOriginal)
    socialData.value = JSON.parse(socialOriginal)
}

async function save()
{
    console.log (socialData.value.fields)

    loading.value = true
    var payload = ""

    var dataToSend = JSON.parse(toJson(basicsData.value))

    const token = await props.keycloak.getAccessToken()
    
    payload = removeEmpty(dataToSend)
    post(POST_BASISC, payload, token, onResponse, emitError)

    payload = removeEmpty(socialData.value)
    post(POST_SOCIAL, payload, token, onResponse, emitError)
}

function onResponse(data)
{
    loading.value = false
    console.log (data)
}

function setCenter(c)
{
    basicsData.value.coordinates = {
        coordinates: [c.lat, c.lng],
        type: "Point"
    }
}

function setAddress(a)
{
    address.value = a
}

async function updateProfilepic(newImage)
{

    basicsData.value.profilepic = newImage.id
    image.value = `${ASSETS_URL}${newImage.id}${PROFILEPIC_PARAMS}`
    
    if (basicsData.value.uuid !== null)
    {
        const payload =
        {
            profilepic: newImage.id
        }

        const token = await props.keycloak.getAccessToken()
        post(POST_BASISC, payload, token,null,emitError)
    }
}

function emitError(e)
{
    emit('error', e)
}
</script>

<template>
    <template v-if="basicsData">
        <div :class="loading ? 'disabled' : ''">
            <div class="row my-3">
                <div class="col-12 text-center mb-2">
                    <img v-if="image" :src="image"  class="rounded-circle"/>
                    <div v-else class="emptypic rounded-circle center-block"></div>
                    <div class="mt-2">
                        <FileUploader :keycloak="props.keycloak" title="Upload Image" @response="updateProfilepic"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <FieldEdit label="Real Name" v-model="basicsData.name"/>
                    <FieldEdit label="Homepage" v-model="basicsData.homepage"/>
                </div>
                <div class="col-12 col-md-6">
                    <FieldEdit label="Github Account" v-model="socialData.github"/>
                    <FieldEdit label="Nuget Account" v-model="socialData.nuget"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="label mb-1">Statement</div>
                    <textarea class="form-control form-control-sm" rows="5" v-model="basicsData.statement">{{ basicsData.statement }}</textarea>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-12">
                    <div class="label mb-1">Custom Fields</div>
                    <template v-for="(key, index) in socialData.fields">
                        <div class="form-row" :class="index+1 < socialData.fields.length ? 'mb-1' : ''">
                                <div class="form-group col-6">
                                    <input v-model="socialData.fields[index].key" placeholder="key" class="form-control form-control-sm" />
                                </div>
                                <div class="form-group col-6">
                                    <input v-model="socialData.fields[index].value" placeholder="value" class="form-control form-control-sm" />
                                </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="row" v-if="showMap">
                <div class="col-lg-12">
                    <span class="label">Location</span>

                    <SetPositionMap @address="setAddress" @center="setCenter" :coords="basicsData.coordinates.coordinates"/>
                    <div v-if="address != null" class="mt-2">
                        {{ address.display_name }}
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