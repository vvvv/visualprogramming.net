<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import Employee from './Employee.vue'

const props = defineProps(['data','entityId','roles'])
const Employees = ref([])
const emit = defineEmits(['update'])

function addPerson()
{
    const newEmployee = { 
        entity: props.entityId, 
        role: 2, 
        user: { email: "", status: "", uuid: "" }, 
        isDeleted: false, 
        isEdited: false,
        isNew: true
    }
    Employees.value.push(newEmployee)
}

watchEffect(()=>{
    var persons = personsToPayload (Employees.value)
    emit ('update', persons)
})

onMounted(()=>{
    // Employees
    Employees.value = new Array()
    props.data.forEach((d)=>{
        var Employee = {...d, isDeleted: false, isEdited: false, isNew: false }
        Employees.value.push(Employee)
    })
})

function personsToPayload(_persons)
{
    var persons = new Array()

    _persons.forEach((e) => {

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

    return persons
}

</script>
<template>
    <template v-for="(e, index) in Employees">
        <div v-if="!e.isDeleted" class="col-12 col-lg-6 mb-3">
            <div class="card personCard">
                <div class="card-body">
                    <Employee v-model="Employees[index]" :roles="props.roles"/>
                </div>
            </div>
        </div>
    </template>
    <div class="col-12 col-lg-6 mb-3">
        <button class="btn btn-sm btn-secondary" @click="addPerson">Add Person</button>
    </div>
</template>