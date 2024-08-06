<script setup>
import { ref, onMounted, defineProps, defineModel, defineEmits, watch } from 'vue'
import { OSM_URL, OSM_COPY, NOMINATIM_URL } from '../../constants'

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

const props = defineProps (['coords'])
const zoom = ref (1)
const initialCenter = {lat: props.coords[1], lng: props.coords[0]}
const center = ref(initialCenter)
const address = defineModel()
var marker = null
var map = null

const emits = defineEmits(['address','center'])

function mapSetup () {
     map = L.map("map").setView(center.value, zoom.value);
     L.tileLayer(OSM_URL, {
         attribution: OSM_COPY,
         maxZoom: 18,
       }
     ).addTo(map);
     marker = L.marker(center.value, {draggable: false}).addTo(map)

     map.on('move', (m) =>{
        center.value = m.target.getCenter()
     })
}

watch(center, async (newCenter) => {

    if (marker)
    {
        marker.setLatLng(newCenter)
    }

    emits('center', newCenter)
})


onMounted(() =>{
    mapSetup()
})

function checkCoordinates()
{
    var url=`${NOMINATIM_URL}?lat=${center.value.lat}&lon=${center.value.lng}&format=json&zoom=12`

    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            address.value = data
            emits('address', data)
        })
    })
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
        <button class="btn btn-sm btn-secondary mt-2"@click="checkCoordinates">Find Address from Location</button>
    </template>
</template>