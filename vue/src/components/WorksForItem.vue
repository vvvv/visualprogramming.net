<script setup>
import { defineModel } from 'vue'
import Field from './Field.vue'

const model = defineModel()
</script>

<template>  
    <Field label="name" :value="model.name"/>
    <Field label="role" :value="model.role"/>
    <div class="field">
        <div class="label">
            Confirmed:    
        </div>
        <div class="value">
            <div class="btn-group btn-group-sm btn-group-toggle">
                <label class="btn" :class="model.confirmed ? 'btn-secondary active' : 'btn-outline-secondary'">
                    <input type="radio" :checked="model.confirmed" @click="model.confirmed = !model.confirmed"> Yes
                </label>
                <label class="btn" :class="!model.confirmed ? 'btn-secondary active' : 'btn-outline-secondary'">
                    <input type="radio" :checked="!model.confirmed" @click="model.confirmed = !model.confirmed"> No
                </label>
            </div>
        </div>
    </div>
</template>