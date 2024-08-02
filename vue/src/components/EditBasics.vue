<script setup>

import { ref } from 'vue'
import { ASSETS_URL } from '../constants'
import FieldEdit from './FieldEdit.vue'
import { isEmpty, toJson, removeProps } from '../utils'
import ActionButtons from './ActionButtons.vue';
import SetPositionMap from './SetPositionMap.vue';
import Spinner from './Spinner.vue';

const props = defineProps(['data'])

const basicsData = ref(cleanup(props.data.Basics))
const socialData = ref(cleanup(props.data.SocialNetworks))

const array = props.data.SocialNetworks.fields || [];
socialData.value.fields =  Array(4).fill(null).map((_, index) => array[index] || { key:'', value:''});
basicsData.value.coordinates = {coordinates: [0,0], type: "Point"}

const basicsOriginal = toJson(basicsData.value)
const socialOriginal = toJson(socialData.value)

const imageParams = "?quality=90&fit=cover&width=120"

const address = ref(null)

function revert()
{
    basicsData.value = JSON.parse(basicsOriginal)
    socialData.value = JSON.parse(socialOriginal)
}

function cleanup( obj )
{
    const removeFields = ['date_updated', 'date_created']
    removeProps(obj, removeFields)
    
    return obj
}

function save()
{
    console.log(toJson(basicsData.value))
    console.log(toJson(socialData.value))
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


</script>

<template>
    <template v-if="basicsData">
        <div class="row">
            <div class="col-12 col-sm-3">
                <img :src="`${ASSETS_URL}${basicsData.profilepic.image_id}${imageParams}`" v-if="basicsData.profilepic !== 'undefined'" class="rounded-circle img-fluid"/>
                <div class="emptypic rounded-circle" v-else></div>
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
        <div class="row">
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



    </template> 
    <template v-else>
        <Spinner/>
    </template>
</template>