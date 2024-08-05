<script setup>
import { isEmpty } from '../utils'

const props = defineProps({
    label: String,
    value: String
  })

</script>

<template>
    <div class="field">
        <div class="label">{{ label }}</div>
        <div class="value">{{ value }}</div>
    </div>
</template>