<script setup>

import { ref, defineProps, computed, defineExpose, defineModel } from 'vue'
import { POST_WORKSFOR } from '../../constants'
import { post, cleanup, removeEmpty, toJson, removeProps, isEmpty } from '../../utils'
import ActionButtons from './ActionButtons.vue'
import FieldEdit from './FieldEdit.vue'
import Dropdown from './Dropdown.vue'

const props = defineProps(['roles'])
const model = defineModel()
const role = ref(model.value.role-1)
const roles = props.roles.map((e) => e.role)

function edit ()
{
    emit('edit')
}

function updateRole(index)
{
    model.value.role = index+1
    role.value = index
}

</script>

<template>
    <!-- E-Mail -->
    <div class="row">
        <div class="col-3" v-if="model.isNew">
            <input class="form-control form-control-sm" v-model="model.user.email" :placeholder="E-Mail"/>
        </div>
        <div v-else>
            {{ model.user.email }}
        </div>

        <!-- Role -->
        <div class="col-3" v-if="model.isNew || model.isEdit">
            <Dropdown :index="role" :values="roles" :update="updateRole" />
        </div>
        <div class="col-3" v-else>
            {{ roles[model.role] }}
        </div>

        <!-- Status -->
        <div class="col-3">
            {{ model.user.status }}
        </div>

        <div class="col-3">
            <div v-if="!model.isNew && !model.isEdit" class="btn btn-sm" @click="edit">Edit</div>
            <div class="btn btn-sm" @click="model.isDeleted = true">Delete</div>
        </div>
     </div>
</template>