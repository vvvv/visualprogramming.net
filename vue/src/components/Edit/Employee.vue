<script setup>

import { ref, defineProps, onMounted, defineModel } from 'vue'
import FieldEdit from './FieldEdit.vue'
import Dropdown from './Dropdown.vue'
import { toJson } from '../../utils';

const props = defineProps(['roles'])
const model = defineModel()
const original = toJson(model.value)
const role = ref(model.value.role-1)
const roles = props.roles.map((e) => e.role)
const isEdit = ref(false)
const input = ref(null)

function edit()
{
    model.value.isEdited = true
    isEdit.value = true
}

function revert()
{
    model.value = JSON.parse(original)
    isEdit.value = false
}

function updateRole(index)
{
    model.value.role = index+1
    role.value = index
}

onMounted(()=>{
    if (model.value.user.email == "") input.value.focus()
})

</script>

<template>
     <div :class="isEdit || model.isNew ? '' : 'disabled'">
        <!-- EMAIL -->
        <div class="label">E-Mail</div>
        <input class="form-control form-control-sm" v-model="model.user.email" ref="input"/>

        <div class="row mt-2">
            <div class="col-6">
                <!-- ROLE -->
                <div class="label">Role</div>
                <Dropdown :index="role" :values="roles" :update="updateRole"/>
            </div>
            <div class="col-6">
                <!-- STATUS -->
                <div class="label">Status</div>
                <div>{{ model.confirmed ? 'Confirmed' : 'Pending' }}</div>
            </div>
        </div>
    </div>

    <hr class="my-2">

    <!-- EDIT / DELETE -->
    <div v-if="!model.isNew && !isEdit" class="btn btn-sm btn-outline-secondary mr-2" @click="edit">Edit</div>
    <div v-if="isEdit" class="btn btn-sm btn-outline-secondary mr-2" @click="revert">Cancel</div>
    <div class="btn btn-sm btn-outline-secondary" @click="model.isDeleted = true">Delete</div>
</template>