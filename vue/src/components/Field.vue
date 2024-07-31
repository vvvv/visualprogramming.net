<script setup>
import { isEmpty } from '../utils'

const model = defineModel()

const props = defineProps({
    label: String,
    edit: Boolean,
    multi: Boolean
  })

</script>

<template>
    <div class="field">
        <div class="label">{{ label }}</div>
        <template v-if="edit">
            <textarea v-if="multi" class="form-control form-control-sm" rows="5" v-model="model">{{ model }}</textarea>
            <input v-else class="form-control form-control-sm" v-model="model"/>
        </template>
        <template v-else>
            <div class="value">{{ isEmpty(model) }}</div>
        </template>
    </div>
</template>