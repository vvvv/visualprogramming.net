<script setup>
import { ref } from 'vue'
import UserList from '../components/UserList.vue'
import UserInfo from '../components/UserInfo.vue'

// const UserMap = defineAsyncComponent(() =>
//   import('../components/UserMap.vue')
// )

//const isMap = ref(false)

const url = new URL(window.location.href)
const params = url.searchParams
const username = params.get("user")
const edit = params.get("edit")
const map = params.get("map")

</script>

<template>
    <UserInfo v-if="username" :username="username"/>
    <UserList v-else :isMap="map"/>
</template>
