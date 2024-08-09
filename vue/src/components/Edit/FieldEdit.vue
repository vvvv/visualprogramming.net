<script setup>

import { ref, defineModel, onMounted } from 'vue'

const model = defineModel()
const input = ref(null)

const props = defineProps({
    label: String,
    focus: Boolean,
    placeholder: String,
    multi: Boolean
})

onMounted(()=>
{
    if (input.value && props.focus) { 
        input.value.focus()
    }
})

</script>

<template>
    <div class="field">
        <div class="label">{{ label }}</div>
            <textarea v-if="multi" class="form-control form-control-sm" rows="5" v-model="model" :placeholder="placeholder" ref="input">{{ model }}</textarea>
            <input v-else class="form-control form-control-sm" v-model="model" :placeholder="placeholder" ref="input"/>
    </div>
</template>