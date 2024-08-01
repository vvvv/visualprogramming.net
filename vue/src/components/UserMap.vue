<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue'
import { PROFILE_URL, OSM_URL, OSM_COPY, USERS_ON_MAP_URL } from '../constants'

import "leaflet/dist/leaflet.css";
import L from "leaflet";

//Setup Icons
import markerIconUrl from '/node_modules/leaflet/dist/images/marker-icon.png';
import markerIconRetinaUrl from '/node_modules/leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from '/node_modules/leaflet/dist/images/marker-shadow.png';

L.Icon.Default.prototype.options.iconUrl = markerIconUrl;
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;
L.Icon.Default.imagePath = '';

const state = defineModel()

const zoom = ref (2)
const users = ref (null)
const count = ref (0)
const initialCenter = [47.41322, -1.219482]
const center = ref({lat: initialCenter[0], lng: initialCenter[1]})
const markerLayer = L.layerGroup()
var map = null

function mapSetup () {
     map = L.map("map").setView(center.value, zoom.value);
     L.tileLayer(OSM_URL, {
         attribution: OSM_COPY,
         maxZoom: 18,
       }
     ).addTo(map);
     markerLayer.addTo(map);
}

function fetchData(url)
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            count.value = data.meta.filter_count
            users.value = data.data
            .filter (user => {
                return user.Basics.coordinates !== null;
            })
            .map((user) => {
                //var coord = e.coordinates.match(/\((.*)\s(.*)\)/)
                //return { user: e.username, point: [coord[1], coord[2]] }
                
                var point = new Array(0,0)

                try {
                    var coords = JSON.parse(user.Basics.coordinates).coordinates
                    point = [ coords[1], coords[0] ]
                }
                catch{
                    console.log (user.Basics.coordinates)
                }

                return { user: user.Basics.username, point: point }
            })
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

watch(users, async (newUsers, old) => {
    markerLayer.clearLayers()
    if (newUsers !== null)
    {
        newUsers.forEach( user => {
            var m = L.marker(user.point);
            var content = `
            <p>${user.user}</p>
            <a href="#" class="btn btn-secondary">Open Proile</a>
            `
            m.bindPopup(content, {closeButton: false})
            m.bindTooltip(user.user)
            markerLayer.addLayer(m)
        })
    }   
})

watchEffect(() => {

    const _coordFilter = '[Basics][coordinates][_neq]=""'
    const _usernameFilter = `[Basics][username][_contains]=${state.value.filter}`
    const _limit = 10

    var _filter = ""

    if (state.value.filter!=="")
    {
        _filter = `&filter[_and][0]${_coordFilter}&filter[_and][1]${_usernameFilter}`
    }
    else
    {
        _filter = `&filter${_coordFilter}`
    }

    const url = `${USERS_ON_MAP_URL}&limit=${_limit}${_filter}&meta=filter_count`

    fetchData(url)
})

onMounted(() =>{
    mapSetup()
})

function link(l)
{
    window.location.href = `${PROFILE_URL}${l}`
}

</script>

<template>
    <template v-if="true">
        <!-- <div style="height: 400px">
            <l-map ref="map" v-model:zoom="zoom" :center.sync="initialCenter" @move="move" @zoom="move">
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
                ></l-tile-layer>
                <l-marker v-for="u in users" :lat-lng="u.point" @click="link(u.user)">
                    <l-tooltip>{{ u.user }}</l-tooltip>
                </l-marker>
                <l-marker :lat-lng="curLocation"></l-marker>
            </l-map>
        </div> -->
        <div id="map" style="height: 400px"></div>
    </template>
</template>