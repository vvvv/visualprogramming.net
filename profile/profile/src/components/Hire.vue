<script setup>
import { email } from '@vueform/vueform';
import { ref, watch, onMounted, computed } from 'vue'
import Constants from './../constants'

  const emit = defineEmits(['reload'])

  const { data, constants, keycloak } = defineProps(['data', 'constants', 'keycloak'])
  const hiretypes = ref([])
  const isChanged = ref(false)
  const form$ = ref(null)
  const columns = {
    sm: { container: 12, label: 4, wrapper: 12 },
    lg: { container: 12, label: 4, wrapper: 12 }
  }
  
  onMounted(async ()=>{
    setFormData();
  })

  const setFormData = async ()=>{
    hiretypes.value = constants.hireTypes

    if (form$.value != null)
    {
      await form$.value.load(data, true)
      form$.value.clean()
      isChanged.value=false;
    }
  }

  watch (()=>data, async(newValue, oldValue) => {
    if (form$.value != null)
    {
      setFormData()
    }
  }, { immediate: true })

const formatLoadedData = (data) => {

  var d = {
        available: data.hire.available,
        types: data.hire.types.map((e)=>{return e.value}),
        // workFor: data.hire.workFor.map ((e)=>{
        //   return {
        //     status: e.status,
        //     company: e.company,
        //     role: constants.companyRoles.find((el)=> el.id == e.role).role
        //   }
        // })
    }
  return d
}

const handleSuccess = (response, form$) => {
  form$.messageBag.clear() // clear message bag
  form$.messageBag.append('Updated', 'message') // add success message

  emit ('reload')
}

const handleError = (error, details, form$) => {
  switch (details.type) {
    // Error occured while preparing elements (no submit happened)
    case 'prepare':
      console.log(error) // Error object

      form$.messageBag.append('Could not prepare form')
      break

    // Error occured because response status is outside of 2xx
    case 'submit':
      console.log(error) // AxiosError object
      console.log(error.response) // axios response
      console.log(error.response.status) // HTTP status code
      console.log(error.response.data) // response data

      form$.messageBag.append('Some error from the backend')
      break

    // Request cancelled (no response object)
    case 'cancel':
      console.log(error) // Error object

      form$.messageBag.append('Request cancelled')
      break

    // Some other errors happened (no response object)
    case 'other':
      console.log(error) // Error object

      form$.messageBag.append('Couldn\'t submit form')
      break
  }
}

const submit = async (FormData, form$) => {

  // Using form$.data will INCLUDE conditional elements and it
  // will submit the form as "Content-Type: application/json".
  const data = await formatDataForSumbit(form$.data)

  // Setting cancel token
  form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()

  return await form$.$vueform.services.axios.post(Constants.EDITHIRE,
  data,
    {
      cancelToken: form$.cancelToken.token,
    }
  )
}

const formatDataForSumbit = async (requestData) => { 
  try {
    
    const token = await keycloak.getAccessToken()

    return {
      token: token,
      available: requestData.available,
      types: requestData.types
      // workFor: requestData.workFor.map((c, index)=>{
      //   return {
      //     status: c.status,
      //     uuid: data.hire.workFor[index].uuid
      //   }
      // })
    }

  } catch (error) {
    throw error // this will cancel the submit process
  }
}

const handleChange = () => {
  isChanged.value = true
}

const disable = (form$) => ({
  ElementLayout: {
    container: [
      { 'disabled': form$.el$('hire.available')?.value === 'false' }
    ],
  }
})

</script>

<template>
  <Vueform
    size="md"
    ref="form$" 
    form-key="hire"
    method="post"
    @success="handleSuccess"
    @error="handleError"
    @change="handleChange"
    :endpoint="submit"
    :format-load="formatLoadedData" 
    :format-data="formatDataForSumbit"
    >

    <!-- <StaticElement
      name="hire_title"
      content="Hire"
      tag="h2"
    /> -->
    
    <GroupElement name="hire">
        <ToggleElement name="available" true-value="true" false-value="false" :columns="columns" label="Available for Hire"/>
    
        <GroupElement name="hiregroup" :add-classes="disable">
            <CheckboxgroupElement 
                :columns="columns"
                name="types" 
                label="Available For"
                :items="hiretypes"/>
        </GroupElement>
    </GroupElement>

    <GroupElement :columns="columns" name="buttons">
      <ButtonElement full
      name="submit"
      :submits="true"
      button-label="Update"
      :columns="{
        default: 12,
        sm: 6
      }"
      :disabled="!isChanged"
      size="sm"/>

      <ButtonElement secondary
        name="reset"
        button-label="Revert"
        align="right"
        :resets="true"
        :columns="{
          default: 12,
          sm: 6
        }"/>
    </GroupElement>

  </Vueform>
</template>