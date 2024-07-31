<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { USERS_URL, PROFILE_URL, OSM_URL, OSM_COPY } from '../constants'

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

const zoom = ref (2)
const users = ref (null)
const count = ref (0)
const initialCenter = [47.41322, -1.219482]
const center = ref({lat: initialCenter[0], lng: initialCenter[1]})
const limit = 10
var map = null

const request = `?fields=username,coordinates&sort=name&filter[coordinates][_neq]=""&limit=${limit}&meta=total_count`

const url = `${USERS_URL}/${request}`

function mapSetup () {
     map = L.map("map").setView(center.value, zoom.value);
     L.tileLayer(OSM_URL, {
         attribution: OSM_COPY,
         maxZoom: 18,
       }
     ).addTo(map);
}

watchEffect(()=>{

    if (users.value !== null)
    {
        users.value.forEach( user => {
            var m = L.marker(user.point).addTo(map);
            var content = `
            <p>${user.user}</p>
            <a href="#" class="btn btn-secondary">Open Proile</a>
            `
            m.bindPopup(content, {closeButton: false})
            m.bindTooltip(user.user)
        })
    }
    
})

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
    mapSetup()
})

function link(l)
{
    window.location.href = `${PROFILE_URL}${l}`
}

function checkCoordinates()
{
    var url=`${NOMINATIM_URL}?lat=${curLocation.value.lat}&lon=${curLocation.value.lng}&format=json&zoom=12`

    fetch(url)
    .then((response) => {
        response.json().then((data) => {

            console.log (data)

        })
    })
}

const curLocation = ref(initialCenter)

function move(v)
{
    curLocation.value = v.target.getCenter()
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
        <button @click="checkCoordinates">Find Location</button>
    </template>
</template>