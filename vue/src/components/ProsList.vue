<script setup>
import { ref, onMounted } from 'vue'
import { isEmpty } from '../utils'
import { HIRE_URL, PROFILE_URL, ASSETS_URL } from '../constants'

const request = `?filter[available][_eq]=true&sort=user_id.username&fields=*.*.*`

const pros = ref(null)

function image (l)
{
    return `${ASSETS_URL}${l}?width=40&quality=90&fit=cover`;
}

function fetchData()
{
    fetch (`${HIRE_URL}${request}`)
        .then((response) =>{
            response.json().then((data) =>{
                    pros.value = data.data
                })
            })
        .catch ((err) => {
            console.log (err)
        })
}

onMounted(()=>
{
    fetchData()
})

</script>

<template>
    <div class="h2">Professionals</div>
    <div class="card mb-4" v-for="{ user_id, description, type } in pros" track-by="username" v-if="pros.length > 0">
        <h5 class="card-header">{{ user_id.name }} ({{ user_id.username }})</h5>
        <div class="card-body">
            <img :src="image(user_id.profilepic.image_id)" v-if="user_id.profilepic !== null" class="rounded-circle"/>
            <p class="card-text">{{ description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                Available for:<br/>
                <template v-for="(t, index) in type" v-if="type!='undefined'">
                        <span>{{ isEmpty(t) }}</span><template v-if="index+1 < type.length">, </template>
                </template>
            </li>
        </ul>
        <div class="card-body">
            <a :href="PROFILE_URL+user_id.username" class="card-link">Show profile</a>
        </div>
    </div>
    <template v-else>
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </template>
</template>