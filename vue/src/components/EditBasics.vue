<script setup>

import { ref, watchEffect, onMounted } from 'vue'
import { ASSETS_URL, POST_BASISC, POST_SOCIAL } from '../constants'
import { cleanup, post, removeEmpty, toJson, removeProps } from '../utils'
import FieldEdit from './FieldEdit.vue'
import ActionButtons from './ActionButtons.vue';
import SetPositionMap from './SetPositionMap.vue';
import Spinner from './Spinner.vue';
import FileUploader from './FileUploader.vue';

const props = defineProps(['data', 'keycloak'])

const basicsData = ref(cleanup(props.data.Basics))
const socialData = ref(cleanup(props.data.SocialNetworks))

const basicsOriginal = toJson(basicsData.value)
const socialOriginal = toJson(socialData.value)

const loading = ref(false)
const address = ref(null)
const image = ref()

const imageParams = "?quality=90&fit=cover&width=120"
const showMap = false

onMounted(()=>{
    
    basicsData.value.coordinates = {coordinates: [0,0], type: "Point"}

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
})

watchEffect(()=>{
    if (basicsData.value.profilepic !== null)
    {
        image.value = `${ASSETS_URL}${basicsData.value.profilepic.image_id}${imageParams}`
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
    delete dataToSend.profilepic

    const token = await props.keycloak.getAccessToken()
    
    payload = removeEmpty(dataToSend)
    post(POST_BASISC, payload, token, onResponse)

    payload = removeEmpty(socialData.value)
    post(POST_SOCIAL, payload, token, onResponse)
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

function updateImage(uid)
{
    image.value = `${ASSETS_URL}${uid.id}${imageParams}`
    console.log (image.value)
}


</script>

<template>
    <template v-if="basicsData">
        <div :class="loading ? 'disabled' : ''">
            <div class="row">
                <div class="col-12 col-sm-3">
                    <div class="row">
                        <div class="col-12 text-center">
                            <img v-if="image" :src="image"  class="rounded-circle"/>
                            <div v-else class="emptypic rounded-circle center-block"></div>
                        </div>
                        <div class="col-12 text-center mt-2">
                            <FileUploader :keycloak="props.keycloak" title="Upload Image" @response="updateImage"/>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-9">
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
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-3 text-right">
                    <span class="label">Statement</span>
                </div>
                <div class="col-md-9">
                    <textarea class="form-control form-control-sm" rows="5" v-model="basicsData.statement">{{ basicsData.statement }}</textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 text-right">
                    <span class="label">Custom Fields</span>
                </div>
                <div class="col-md-9">
                    <template v-for="(key, index) in socialData.fields">
                        <div class="form-row" :class="index+1 < socialData.fields.length ? 'mb-3' : ''">
                                <div class="form-group col-4">
                                    <input v-model="socialData.fields[index].key" placeholder="key" class="form-control form-control-sm" />
                                </div>
                                <div class="form-group col-8">
                                    <input v-model="socialData.fields[index].value" placeholder="value" class="form-control form-control-sm" />
                                </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="row" v-if="showMap">
                <div class="col-md-3 text-right">
                        <span class="label">Location</span>
                </div>
                <div class="col-md-9">
                    <SetPositionMap @address="setAddress" @center="setCenter" :coords="basicsData.coordinates.coordinates"/>
                    <div v-if="address != null" class="mt-2">
                        {{ address.display_name }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-9">
                    <ActionButtons @save="save" @revert="revert"/>
                </div>
            </div>
        </div>
    </template> 
    <template v-else>
        <Spinner/>
    </template>
</template>