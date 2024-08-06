<script setup>

import { defineProps, defineEmits} from 'vue'

import { FILE_UPLOAD_URL, USERPIC_FOLDER } from '../../constants'

const props = defineProps (['keycloak', 'title'])
const events = defineEmits (['response'])

function chooseFile()
{
    var input = document.createElement('input');
    input.type = 'file';
    input.accept="image/png, image/jpeg"
    input.onchange = e => { 
        if (e.target && e.target.files) {
                uploadFile (e.target.files[0]);
        } 
    }
    
    input.click();
}

async function uploadFile(f)
{
    const token = await props.keycloak.getAccessToken()

    const formData = new FormData()
    formData.append('file', f)
    formData.append('tags', ['userpic'])
    formData.append('folder', USERPIC_FOLDER)
    formData.append('name', 'userpic2.'+f.name)
    
    const headers = { 
        'Authorization': token,
     }

    fetch(FILE_UPLOAD_URL, {
        method: "POST",
        headers: headers,
        body: formData
    })
    .then((response) => {
        response.json().then((data) => {
            events('response', data)
        })
    })
    .catch((err) => {
        //if (onResponse) onResponse(err)
        console.error(err);
    });
}

</script>

<template>
    <a href="#" type='file' class="badge badge-pill badge-dark" @click="chooseFile">{{ props.title }}</a>
</template>