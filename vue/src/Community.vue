<script setup>
  import { computed } from 'vue'
  import Home from './Pages/Home.vue'
  import Business from './Pages/Business.vue'
  import Users from './Pages/Users.vue'
  import Professionals from './Pages/Professionals.vue'

  const props = defineProps(['page'])

  const currentView = computed(() => {
    return routes[props.page]
  })

  const routes = {
    '': Home,
    'community': Users,
    'users': Users,
    'professionals': Professionals,
    'businesses': Business
  }
</script>

<template>
    <component :is="currentView" />
</template>