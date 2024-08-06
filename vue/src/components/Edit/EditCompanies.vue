<script setup>

import { onMounted } from 'vue'
import Spinner from '../Spinner.vue';
import Entity from './Entity.vue';

const props = defineProps(['data', 'keycloak'])
const data = props.data.entities.value.companies
const constants = props.data.constants.value

onMounted(()=>{
})

</script>

<template>
    <template v-if="data">
        <div :class="loading ? 'disabled' : ''">
            <template v-for="company in data">
                <Entity :data="company" :keycloak="props.keycloak" :constants="constants"/>
            </template>
        </div>
    </template>
    <template v-else>
        <Spinner/>
    </template>
</template>