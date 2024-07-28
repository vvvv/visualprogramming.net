<script setup>
import { ref, watchEffect, defineAsyncComponent } from 'vue'
import { USERS_URL, ASSETS_URL } from '../constants'

const UserMap = defineAsyncComponent(() =>
  import('./UserMap.vue')
)

const fields = `fields=*,profilepic.image_id`

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
            totalCount.value = data.meta.total_count || totalCount.value
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
    const sort = "&sort=username"
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

    const url = `${USERS_URL}?${fields}${_filter}${sort}${pages}${count}`;

    fetchData(url)
})

</script>

<template>
    <div class="h2">Users</div>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link" :class="{active: !isMap}" href="#" @click="isMap=false">List</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{active: isMap}" href="#" @click="isMap=true">Map</a>
        </li>
    </ul>

    <template v-if="!isMap">
        <p>Total profiles: {{ totalCount }}</p>
        <div class="row justify-content-between">
            <div class="col-12 col-md-6">
                <div class="form-row">
                    <div class="col-6 my-1">
                        <label for="filter" class="sr-only">Filter</label>
                        <input id="filter" v-model="filterField" placeholder="filter" class="form-control"/>
                    </div>
                    <div class="col-6 my-1">
                        <button @click="applyFilter" class="btn btn-secondary ml-2 form-group">Apply</button>
                        <button @click="resetFilter" class="btn btn-secondary ml-2 form-group" v-if="filterField != ''">Reset</button>
                    </div>
                </div>
            </div>
            <div v-if="totalPages > 1" class="col-12 col-md-auto">
                <div class="form-row">
                    <div class="col-auto my-1">
                        Page
                        <button @click="currentPage--" class="btn btn-secondary" :disabled="currentPage <= 1"> < </button>
                        {{  currentPage }} of {{ totalPages }}
                        <button href="#" @click="currentPage++" class="btn btn-secondary" :disabled="currentPage >= totalPages"> > </button>
                    </div>
                    <div class="col-auto ml-2 my-1">
                        <div class="form-row">
                            <label for="jumpto" class="sr-only">Jump To</label>
                            <input v-model="pageToJump" style="width: 3em" class="form-control">
                            <button href="#" @click="go" class="btn btn-secondary ml-2"> Go </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-sm">
                <colgroup>
                    <col class="col-md-1">
                    <col class="col-md-11">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" class="picsize"></th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ name, username, statement, profilepic } in users" track-by="id">
                        <td><img :src="link(profilepic.image_id)" v-if="profilepic !== null" class="rounded-circle"/></td> 
                        <td><a :href="`?${username}`">{{username}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>
    <template v-else-if="isMap">
        <UserMap/>
    </template>
</template>