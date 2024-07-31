<script setup>

import { ref, watchEffect, onMounted, computed } from 'vue'
import { PUBLIC_USER_INFO_URL, ASSETS_URL } from '../constants'
import FieldEdit from './FieldEdit.vue'
import { isEmpty } from '../utils'

var model = defineModel()
var Original = null

function revert()
{
    // UserData.value = JSON.parse(Original)
}

watchEffect(()=>{
    console.log (model.value)
})
</script>

<template>
        <fieldset class="md-2">
            <input type="checkbox" class="form-check-input"v-model="model.Hire.available"/>
            <span class="label">Available for Hire</span>
        </fieldset>
        <hr>
        <fieldset :disabled="!model.Hire.available">
            <FieldEdit label="Description" v-model="model.Hire.description" :edit="edit" :multi="true"/>
            <div class="field">
                <div class="label">
                    Available for:
                </div>
                <div class="value">
                    <template v-for="(t, index) in model.Hire.type" v-if="model.Hire.type!='undefined'">
                        <span>{{ isEmpty(t) }}</span><template v-if="index+1 < model.Hire.type.length">, </template>
                    </template>
                    <span v-else>---</span>
                </div>
            </div> 
        </fieldset>
</template>