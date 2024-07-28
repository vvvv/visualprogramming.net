<script setup>
import { ref, onMounted } from 'vue'
import { USERS_URL, PROFILE_URL } from '../constants'

import "leaflet/dist/leaflet.css";
import { LMap, LMarker, LTooltip, LTileLayer } from "@vue-leaflet/vue-leaflet";

const zoom = ref (2)
const users = ref (null)

const request = `?fields=username,coordinates&sort=name`

const url = `${PROFILE_URL}/${request}`

function fetchData(url)
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            users.value = data.data
            .filter (e => {
                return e.coordinates !== null;
            })
            .map((e) => {
                var coord = e.coordinates.match(/\((.*)\s(.*)\)/)
                return { user: e.username, point: [coord[2], coord[1]] }
            })
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

onMounted(() =>{
    fetchData(url)
})

function link(l)
{
    window.location.href = `${USERS_URL}${l}`
}

</script>

<template>
    <template v-if="true">
        <div style="height:600px; width:800px">
            <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
                ></l-tile-layer>
                <template v-for="u in users">
                    <l-marker :lat-lng="u.point" @click="link(u.user)">
                        <l-tooltip>{{ u.user }}</l-tooltip>
                    </l-marker>    
                </template>
            </l-map>
        </div>
    </template>
</template>