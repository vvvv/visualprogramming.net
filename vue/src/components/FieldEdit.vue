<script setup>
    const model = defineModel()

    const props = defineProps({
        label: String,
        multi: Boolean
    })

</script>

<template>
    <div class="field">
        <div class="label">{{ label }}</div>
            <textarea v-if="multi" class="form-control form-control-sm" rows="5" v-model="model">{{ model }}</textarea>
            <input v-else class="form-control form-control-sm" v-model="model"/>
    </div>
</template>