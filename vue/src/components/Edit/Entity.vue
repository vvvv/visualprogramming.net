<script setup>

import { ref, defineProps, onMounted, watchEffect } from 'vue'
import { POST_WORKSFOR } from '../../constants'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../../utils'
import ActionButtons from './ActionButtons.vue'
import FieldEdit from './FieldEdit.vue'
import Employee from './Employee.vue'

const props = defineProps (['data', 'keycloak', 'constants'])

const data = ref(props.data)
const dataOriginal = toJson(data.value)
const roles = props.constants.company_Roles

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
        entity: null, 
        role: 2, 
        user: { email: "", status: "", uuid: "" }, 
        isDeleted: false, 
        isEdited: false,
        isNew: true
    }
    Employees.value.push(newEmployee)
}

function save()
{
    Employees.value.forEach((e) => {
        console.log (e.role)
    })
}

onMounted(()=>{

    //console.log (Employee.value)

})

</script>

<template>
    <div class="row">
        <div class="col-8 h4 mr-auto">
            {{ data.entity.name }} 
        </div>
        <div clas=""></div>
    </div>
   
    <a href="badge badge-pill">{{ data.entity.status }}</a>

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
    <FieldEdit label="Website" v-model="data.entity.website"/>
    <div class="row mb-3">
            <div class="col-lg-3 text-lg-right">
                <span class="label">Description</span>
            </div>
            <div class="col-lg-9">
                <textarea class="form-control form-control-sm" rows="5" v-model="data.entity.description">{{ data.entity.description }}</textarea>
            </div>
    </div>

    <!-- Employees -->
    <div class="h4">Personnel</div>
    <template v-for="(e, index) in Employees" refs="EmployeeRefs">
        <Employee v-if="!e.isDeleted" v-model="Employees[index]" :roles="roles"/>
    </template>

    <button class="btn btn-sm btn-secondary-outline" @click="addPerson">Add Person</button>

    <div class="row">
        <div class="col-12">
            <ActionButtons @save="save" @revert="revert"/>
        </div>
    </div>
</template>