<script setup>
import { ref, defineAsyncComponent } from 'vue'
import UserListNavi from './UserListNavi.vue'
import UserListTable from './UserListTable.vue'

const props = defineProps(['isMap'])

const UserMap = defineAsyncComponent(() =>
  import('./UserMap.vue')
)

var stateObject = {
    isMap: props.isMap,
    currentPage: 1,
    totalPages: 0,
    pageLimit: 10,
    filter: "",
    availableForHire: false
}

const state = ref (stateObject)

</script>

<template>
    <div class="h2">Users</div>
        <UserListNavi v-model="state"/>
        <UserListTable v-model="state" v-if="!state.isMap"/>
        <UserMap v-model="state" v-else/>
</template>