<script setup>
  import { constants } from '../constants'
  import { ref } from 'vue'

  const props = defineProps({
    userData: Object,
    socialData: Object,
    loading: Boolean,
  })

  var user = ref (props.userData)
  var social = ref (props.socialData)

  const emit = defineEmits(['save'])

  function submit()
  {
    if (user.value.homepage!=null)
    {
      emit('save', { url: `${constants.baseURL}/${constants.basics_update}`, data: user.value});
    }
    else
    {
      alert ('homepage not filled')
    }
  }

  function revert()
  {
    user.value = props.userData
    social.value = props.socialData
  }
</script>

<template>
  <input v-model="user.name" :disabled = "loading"/><br>
  <input v-model="user.username"/><br>
  <input v-model="user.homepage"/><br>

  <br>
  <input v-model="social.github"/><br>
  <input v-model="social.nuget"/><br>

  <template v-for="item in social.fields">
    <input v-model="item.key"/><input v-model="item.value"/><br>
  </template>

  <button @click="submit">Save</button>
  <button @click="revert">Revert</button>

</template>
