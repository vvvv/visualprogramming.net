<script setup>
import UserList from '../components/UserList.vue'
import UserInfo from '../components/UserInfo.vue'

const username = window.location.search.slice(1)
const currentView = username === "" ? UserList : UserInfo

</script>

<template>
    <component :is="currentView" :username="username"/>
</template>
