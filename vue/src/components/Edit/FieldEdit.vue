<script setup>

import { defineModel } from 'vue'

const model = defineModel()

const props = defineProps({
    label: String,
    placeholder: String,
    multi: Boolean
})

</script>

<template>
    <div class="field">
        <div class="label">{{ label }}</div>
            <textarea v-if="multi" class="form-control form-control-sm" rows="5" v-model="model" :placeholder="placeholder">{{ model }}</textarea>
            <input v-else class="form-control form-control-sm" v-model="model" :placeholder="placeholder"/>
    </div>
</template>