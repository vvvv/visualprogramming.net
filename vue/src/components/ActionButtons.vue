<script setup>

import { defineEmits } from 'vue'

const emits = defineEmits(['save', 'revert'])

</script>

<template>
    <hr class="my-3"/>
    <button class="btn btn-sm btn-primary mr-4 px-4" @click="emits('save')">Save</button>
    <button class="btn btn-sm btn-outline-secondary px-2" @click="emits('revert')">Revert</button>
</template>