<script setup>
import { ref, onMounted } from 'vue'
import { COMPANIES_URL, ASSETS_URL } from '../constants'

const request = `?filter[status][_eq]=confirmed&fields=*.*.*&sort=name&meta=filter_count`

const companies = ref(null)
const count = ref (0)

function image (l)
{
    return `${ASSETS_URL}${l}?withoutEnlargement`;
}

function fetchData()
{
    fetch (`${COMPANIES_URL}${request}`)
        .then((response) =>{
            response.json().then((data) =>{
                companies.value = data.data
                count.value = data.meta.filter_count
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
    <div class="h2">Businesses</div>
    <template v-if="count > 0">
        <p>This is a list of {{ count }} businesses that use vvvv.</p>
        <div class="row">
            <div v-for="{ name, website, profilepic } in companies" track-by="username" class="company col-md-3 col-lg-4 py-3 border-bottom">
                <div class="logo">
                    <img :src="image(profilepic.image_id)" v-if="profilepic !== null"/>
                </div>
                <p class="name">{{ name }}</p>
                <a :href="website" target="_blank">Website</a>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </template>
</template>