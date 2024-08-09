<script setup>
import { onMounted } from 'vue';

    const props = defineProps(['data', 'index', 'autohide'])
    const emit = defineEmits(['close'])

    onMounted(()=>{
        if (props.autohide)
        {
            setTimeout(() => {emit('close', props.index)}, 5000);
        }
    })
</script>

<template>
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-warning">
            <strong class="mr-auto text-body">Warning</strong>
            <button type="button" class="ml-2 mb-1 close text-body" data-dismiss="toast" aria-label="Close" @click="emit('close', props.index)">
                <span aria-hidden="true" class="">&times;</span>
            </button>
        </div>
        <div class="toast-body bg-dark text-light">
            {{ props.data }}
        </div>
    </div>
</template>