<script setup>
import { ref, onMounted } from 'vue'
import { isEmpty } from '../utils'
import { HIRE_URL, PROFILE_URL, ASSETS_URL } from '../constants'

const pros = ref(null)

function image (l)
{
    return `${ASSETS_URL}${l}?width=40&quality=90&fit=cover`;
}

function fetchData()
{
    fetch (`${HIRE_URL}`)
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
    <div v-if="pros.length > 0" class="card mb-4" v-for="p in pros" track-by="username">
        <h5 class="card-header">{{ p.Basics.name }} ({{ p.Basics.username }})</h5>
        <div class="card-body">
            <img :src="image(p.Basics.profilepic.image_id)" v-if="p.Basics.profilepic !== null" class="rounded-circle"/>
            <p class="card-text">{{ p.Hire.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                Available for:<br/>
                <template v-for="(t, index) in p.Hire.type" v-if="p.Hire.type!='undefined'">
                        <span>{{ isEmpty(t) }}</span><template v-if="index+1 < p.Hire.type.length">, </template>
                </template>
            </li>
        </ul>
        <div class="card-body">
            <a :href="PROFILE_URL+p.Basics.username" class="card-link">Show profile</a>
        </div>
    </div>
    <template v-else>
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </template>
</template>