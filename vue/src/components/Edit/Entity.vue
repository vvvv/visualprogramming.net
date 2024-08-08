<script setup>

import { ref, defineProps, onMounted, watchEffect } from 'vue'
import { POST_COMPANY } from '../../constants'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../../utils'
import ActionButtons from './ActionButtons.vue'
import FieldEdit from './FieldEdit.vue'
import Employee from './Employee.vue'

const props = defineProps (['data', 'keycloak', 'constants'])

const data = ref(props.data)
const dataOriginal = toJson(data.value)
const roles = props.constants.company_Roles
const loading = ref(false)

const Employees = ref([])

watchEffect(()=>{
    Employees.value = new Array()

    data.value.users.forEach((d)=>{
        var Employee = {...d, isDeleted: false, isEdited: false, isNew: false }
        Employees.value.push(Employee)
    })
})

function revert()
{
    data.value = JSON.parse(dataOriginal)
}

function addPerson()
{
    const newEmployee = { 
        entity: data.value.entity.id, 
        role: 2, 
        user: { email: "", status: "", uuid: "" }, 
        isDeleted: false, 
        isEdited: false,
        isNew: true
    }
    Employees.value.push(newEmployee)
}

async function save()
{
    var persons = new Array()

    Employees.value.forEach((e) => {

        if (e.isDeleted && !e.isNew)
        {
            persons.push(
                {
                    action: "delete",
                    uuid: e.uuid
                }
            )
            
        }
        else if(e.isNew && !e.isDeleted)
        {
            persons.push(
                {
                    action: "add",
                    entity: e.entity,
                    email: e.user.email,
                    role: e.role
                }
            )
        }
        else if (e.isEdited)
        {
            persons.push(
                {
                    action: "edit",
                    uuid: e.uuid,
                    role: e.role
                }
            )
        }
    })

    console.log (persons)
    //POST_COMPANY
    loading.value = true

    var payload = {
        collection: "User_Company",
        uuid: data.value.entity.uuid,
        website: data.value.entity.website,
        description: data.value.entity.description,
        personnel: persons
    }

    const token = await props.keycloak.getAccessToken()
    post (POST_COMPANY, payload, token, ()=>{ loading.value = false })
}

</script>

<template>
    <div :class="loading ? 'disabled' : ''">
        <div class="row">
            <div class="col-8 h4 mr-auto">
                {{ data.entity.name }} 
            </div>
            <div clas=""></div>
        </div>
    
        <span class="badge badge-pill badge-primary">{{ data.entity.status }}</span>

        <!-- Image -->
        <div class="row">
            <div class="col-12 text-center">
                <img v-if="image" :src="image"  class="rounded-circle"/>
                <div v-else class="emptypic rounded-circle center-block"></div>
            </div>
            <div class="col-12 text-center mt-2">
                <FileUploader :keycloak="props.keycloak" title="Upload Image" @response="updateImage"/>
            </div>
        </div>

        <!-- Website -->
        <FieldEdit label="Website" v-model="data.entity.website"/>

        <!-- Description -->
        <div class="label">Description</div>
        <textarea class="form-control form-control-sm" rows="5" v-model="data.entity.description">{{ data.entity.description }}</textarea>

        <hr class="my-4"/>

        <!-- Employees -->
        <div class="h4">Personnel</div>
        <div class="row mb-3">
            <template v-for="(e, index) in Employees" refs="EmployeeRefs">
                <div v-if="!e.isDeleted" class="col-12 col-lg-6 mb-3">
                    <div class="card personCard">
                        <div class="card-body">
                            <Employee v-model="Employees[index]" :roles="roles"/>
                        </div>
                    </div>
                </div>
            </template>
            <div class="col-12 col-lg-6 mb-3">
                <button class="btn btn-sm btn-secondary" @click="addPerson">Add Person</button>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <ActionButtons @save="save" @revert="revert"/>
            </div>
        </div>
    </div>
</template>