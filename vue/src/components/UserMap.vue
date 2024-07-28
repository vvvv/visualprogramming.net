<script setup>
import { ref, onMounted } from 'vue'
import { USERS_URL, PROFILE_URL } from '../constants'

import "leaflet/dist/leaflet.css";
import { LMap, LMarker, LTooltip, LTileLayer } from "@vue-leaflet/vue-leaflet";

const zoom = ref (2)
const users = ref (null)
const count = ref (0)

const request = `?fields=username,coordinates&sort=name&filter[coordinates][_neq]=""&limit=-1&meta=total_count`

const url = `${USERS_URL}/${request}`

function fetchData(url)
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            count.value = data.meta.total_count
            users.value = data.data
            .filter (e => {
                return e.coordinates !== null;
            })
            .map((e) => {
                //var coord = e.coordinates.match(/\((.*)\s(.*)\)/)
                //return { user: e.username, point: [coord[1], coord[2]] }
                
                var point = new Array(0,0)

                try {
                    var coords = JSON.parse(e.coordinates).coordinates
                    point = [ coords[1], coords[0] ]
                }
                catch{
                    //console.log (e.coordinates)
                }

                return { user: e.username, point: point }
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
    window.location.href = `${PROFILE_URL}${l}`
}

</script>

<template>
    <template v-if="true">
        <p>Map of {{ count }} users that provided their coordinates.</p>

        <div style="height: 400px">
            <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
                ></l-tile-layer>
                <l-marker v-for="u in users" :lat-lng="u.point" @click="link(u.user)">
                    <l-tooltip>{{ u.user }}</l-tooltip>
                </l-marker>    
            </l-map>
        </div>
    </template>
</template>