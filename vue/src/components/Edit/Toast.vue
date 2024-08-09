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
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-delay="1000">
        <div class="toast-header bg-secondary">
            <strong class="mr-auto">Warning</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" @click="emit('close', props.index)">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            {{ props.data }}
        </div>
    </div>
</template>