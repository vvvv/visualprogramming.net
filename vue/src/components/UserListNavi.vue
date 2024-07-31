<script setup>

import {ref} from 'vue'

const state = defineModel()

const filterField = ref("")
const filterFieldForHire = ref(false)

function applyFilter()
{
    state.value.currentPage = 1
    state.value.filter = filterField.value
    state.value.availableForHire = filterFieldForHire.value
}

function resetFilter()
{
    state.value.filter = filterField.value = ''
}

</script>

<template>
    <div class="border-top">
        <nav class="navbar navbar-expand-lg navbar-color">
                <ul class="navbar-nav nav nav-pills" role="tablist">
                    <li class="nav-item mr-1" :class="{active: !state.isMap}">
                        <a class="nav-link px-4" :class="{active: !state.isMap}" href="#" @click="state.isMap=false">List</a>
                    </li>
                    <li class="nav-item" :class="{active: state.isMap}">
                        <a class="nav-link px-4" :class="{active: state.isMap}" href="#" @click="state.isMap=true">Map</a>
                    </li>
                </ul>
            <div class="mr-auto"></div>
            <div class="">
                <ul class="navbar-nav nav">
                    <li class="nav-item">
                        <form class="form-inline">
                            <input type="checkbox" v-model="filterFieldForHire"/><span class="ml-2">Only available For Hire</span>
                            <input style="width: 8em"class="form-control form-control-sm mr-sm-1 ml-2" v-model="filterField" placeholder="Filter" aria-label="Filter">
                            <button class="btn btn-sm btn-outline-secondary my-2 my-sm-0" @click="applyFilter">Apply</button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <template v-if="!state.isMap">
        <nav class="navbar navbar-expand-lg navbar-color border-top">
                <ul class="navbar-nav nav nav-pills mr-auto mt-1" role="tablist">       
                    <li class="nav-item">
                        <div class="vr"></div>
                    </li>
                    <li class="nav-item mr-1">
                        <button class="btn btn-sm btn-outline-secondary" href="#" @click="state.currentPage--" :disabled="state.currentPage <= 1">Prev</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-sm">{{  state.currentPage }} of {{ state.totalPages }}</button>
                    </li>
                    <li class="nav-item mr-3">
                        <button class="btn btn-sm btn-outline-secondary" href="#" @click="state.currentPage++" :disabled="state.currentPage >= state.totalPages">Next</button>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="btn btn-sm btn-outline-secondary" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Per Page ({{ state.pageLimit }})
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#" @click="state.pageLimit=10">10</a>
                            <a class="dropdown-item" href="#" @click="state.pageLimit=20">20</a>
                            <a class="dropdown-item" href="#" @click="state.pageLimit=50">50</a>
                        </div>
                    </li>
                </ul>
        </nav>
            <!-- border-left pl-2 -->
    </template>
</template>