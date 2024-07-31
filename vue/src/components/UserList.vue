<script setup>
import { ref, watchEffect, defineAsyncComponent } from 'vue'
import { USERS_URL, ASSETS_URL } from '../constants'

const UserMap = defineAsyncComponent(() =>
  import('./UserMap.vue')
)


const users = ref(null)
const filterField = ref("")
const filter = ref("")
const currentPage = ref(1)
const totalPages = ref(0)
const pageLimit = ref(10)
const pageToJump = ref(null)
const totalCount = ref(0)

const isMap = ref(false)


function link (l)
{
    return `${ASSETS_URL}${l}?width=40&quality=90&fit=cover`;
}

function go()
{
    if (pageToJump.value < 1 || pageToJump.value > totalPages.value ){
        pageToJump.value = currentPage.value
    }
    else{
        currentPage.value = pageToJump.value
    }        
}

function fetchData(url)
{
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            users.value = data.data
            totalCount.value = data.meta.total_count || data.meta.filter_count || totalCount.value
            totalPages.value = Math.ceil(totalCount.value / pageLimit.value)  || totalPages.value
        })
    })
    .catch((err) => {
        console.error(err);
    });
}

function applyFilter()
{
    currentPage.value = 1
    filter.value = filterField.value
}

function resetFilter()
{
    filter.value = filterField.value = ''
}

watchEffect(async () => { 
    var _filter = "";
    const sort = "&sort=Basics.username"
    const pages =`&limit=${pageLimit.value}&page=${currentPage.value}`
    var count = ""

    if (filter.value != "")
    {
        _filter = `&filter[username][_contains]=${filter.value}`
    }
    
    if (currentPage.value == 1)
    {
        count = _filter != "" ? "&meta=filter_count" :  "&meta=total_count"
    }

    const url = `${USERS_URL}${_filter}${sort}${pages}${count}`;

    fetchData(url)
})

</script>

<template>
    <div class="h2">Users</div>
        <div class="border-top">
            <nav class="navbar navbar-expand-lg navbar-color">
                    <ul class="navbar-nav nav nav-pills" role="tablist">
                        <li class="nav-item mr-1" :class="{active: !isMap}">
                            <a class="nav-link px-4" :class="{active: !isMap}" href="#" @click="isMap=false">List</a>
                        </li>
                        <li class="nav-item" :class="{active: isMap}">
                            <a class="nav-link px-4" :class="{active: isMap}" href="#" @click="isMap=true">Map</a>
                        </li>
                    </ul>
                    <template v-if="!isMap">
                    <!-- border-left pl-2 ml-2  -->
                    <div class="mr-auto">
                        <ul class="navbar-nav nav nav-pills mr-auto mt-1" role="tablist">       
                            <li class="nav-item">
                                <div class="vr"></div>
                            </li>
                            <li class="nav-item mr-1">
                                <button class="btn btn-sm btn-outline-secondary" href="#" @click="currentPage--" :disabled="currentPage <= 1">Prev</button>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-sm">{{  currentPage }} of {{ totalPages }}</button>
                            </li>
                            <li class="nav-item mr-3">
                                <button class="btn btn-sm btn-outline-secondary" href="#" @click="currentPage++" :disabled="currentPage >= totalPages">Next</button>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="btn btn-sm btn-outline-secondary" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Per Page ({{ pageLimit }})
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#" @click="pageLimit=10">10</a>
                                    <a class="dropdown-item" href="#" @click="pageLimit=20">20</a>
                                    <a class="dropdown-item" href="#" @click="pageLimit=50">50</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- border-left pl-2 -->
                    <div class="">
                        <ul class="navbar-nav nav">
                            <li class="nav-item">
                                <form class="form-inline">
                                    <input style="width: 8em"class="form-control form-control-sm mr-sm-1" v-model="filterField" placeholder="Filter" aria-label="Filter">
                                    <button class="btn btn-sm btn-outline-secondary my-2 my-sm-0" @click="applyFilter">Apply</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    </template>
        </nav>
        </div>
        <template v-if="!isMap">     
        <div class="table-responsive">
            <table class="table table-sm">
                <colgroup>
                    <col class="col-md-1">
                    <col class="col-md-3">
                    <col class="col-md-8">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" class="picsize"></th>
                        <th scope="col">Username</th>
                        <th scope="col">Available for hire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="u in users" track-by="id">
                        <td><img :src="link(u.Basics.profilepic.image_id)" v-if="u.Basics.profilepic !== null" class="rounded-circle"/></td> 
                        <td><a :href="`?user=${u.Basics.username}`">{{u.Basics.username}}</a></td>
                        <td><a :href="`?user=${username}`" v-if="u.Hire !== null">{{ u.Hire.available ? 'Yes' : 'No' }}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>
    <template v-else-if="isMap">
        <UserMap/>
    </template>
</template>