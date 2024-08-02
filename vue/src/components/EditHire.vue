<script setup>

import { ref } from 'vue'
import { POST_HIRE } from '../constants'
import FieldEdit from './FieldEdit.vue'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../utils'
import ActionButtons from './ActionButtons.vue';
import Spinner from './Spinner.vue';

const props = defineProps(['data', 'keycloak'])

const data = ref(cleanup(props.data.Hire))
const dataOriginal = toJson(data.value)

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
    post(POST_HIRE, payload, token, onResponse)
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
            <div class="row"> 
                <fieldset class="md-2">
                    <input type="checkbox" class="form-check-input"v-model="data.available"/>
                    <span class="label">Available for Hire</span>
                </fieldset>
                <hr>
                <fieldset :disabled="!data.available">
                    <FieldEdit label="Description" v-model="data.description" :edit="edit" :multi="true"/>
                    <div class="field">
                        <div class="label">
                            Available for:
                        </div>
                        <div class="value">
                            <template v-for="(t, index) in data.type" v-if="data.type!='undefined'">
                                <span>{{ isEmpty(t) }}</span><template v-if="index+1 < data.type.length">, </template>
                            </template>
                            <span v-else>---</span>
                        </div>
                    </div> 
                </fieldset>
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