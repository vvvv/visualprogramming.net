<script setup>
  import Community from './Community.vue'
  const props = defineProps(['page'])
</script>

<template>
    <Community :page="props.page"/>
</template>