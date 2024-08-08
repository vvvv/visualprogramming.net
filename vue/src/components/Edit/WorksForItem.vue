<script setup>
import { defineModel } from 'vue'
import Field from '../Field.vue'

const model = defineModel()
</script>

<template>
    <div class="row">
        <div class="col-lg-7 mb-2">
            <div class="d-lg-none label">Name</div>
            {{model.name}}
        </div>
        <div class="col-lg-3 mb-2">
            <div class="d-lg-none label">Role</div>
            {{ model.role }}
        </div>
        <div class="col-lg-2 mb-2">
            <div class="d-lg-none label">Confirm</div>
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