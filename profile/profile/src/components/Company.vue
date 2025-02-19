<script setup>
  import { ref, watch, onMounted } from 'vue'
  import Constants from './../constants'

  const emit = defineEmits(['reload'])

  const { data, constants, keycloak } = defineProps(['data', 'constants', 'keycloak'])
  const isChanged = ref(false)
  const form$ = ref(null)
  const logo = ref(null)
  const CompaniesEmpty = ref(true)
  const CompanyExists = ref(false)

  var tempLogo = ""
  const columns = { container: 12, label: 3, wrapper: 12 }
  var fields = new Array(4)
  var roles = ref ([])

  onMounted( async ()=> {
    fields = fields.map ((e)=>{
      return {
        key: "",
        value: ""
      }
    })

    roles.value = constants.companyRoles
    .filter((i)=>{
      return i.id > 1
    })
    .map((i) =>{
     return  {
        value: i.id,
        label: i.role
      }
    }) 
    
    setFormData()
  })

  const setFormData = async ()=>{

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

const formatLoadedData = (loadedData) => {
  
  var data = ""
  
  if (loadedData.companies.length > 0)
  {
    CompaniesEmpty.value = false
    CompanyExists.value = true

    data = {
        company: loadedData.companies[0]
      }

    if (loadedData.companies[0].logo != null)
    {
      logo.value = Constants.ASSETS + loadedData.companies[0].logo
    }
    
  }

  return data
}

const handleSuccess = (response, form$) => {
  form$.messageBag.clear() // clear message bag
  form$.messageBag.append('Updated', 'message') // add success message

  emit ('reload')
}

const handleError = (error, details, form$) => {

  // if (error.response && error.response.status === 400) {
  //   console.log (error.response.data.error)
  // }

  switch (details.type) {
    // Error occured while preparing elements (no submit happened)
    case 'prepare':
      // console.log(error) // Error object

      form$.messageBag.append('Could not prepare form')
      break

    // Error occured because response status is outside of 2xx
    case 'submit':
      // console.log(error) // AxiosError object
      // console.log(error.response) // axios response
      // console.log(error.response.status) // HTTP status code
      // console.log(error.response.data) // response data

      form$.messageBag.append(error.response.data.error)
      break

    // Request cancelled (no response object)
    case 'cancel':
      // console.log(error) // Error object

      form$.messageBag.append('Request cancelled')
      break

    // Some other errors happened (no response object)
    case 'other':
      // console.log(error) // Error object

      form$.messageBag.append('Couldn\'t submit form')
      break
  }
}

const formatDataForSumbit = async ({company, logo_upload}) => { 
  try {

    const token = await keycloak.getAccessToken()

    if (logo_upload != null)
    {
      company.logo = logo_upload.tmp
      tempLogo = company.logo
    }

    return {
      token: token,
      company: company,
    }

  } catch (error) {
    throw error // this will cancel the submit process
  }
}

const handleReset = async ()=>
{
  await setFormData();
}

const formChanged = (data)=>
{
  isChanged.value = true
}

const submit = async (FormData, form$) => {

  // Using form$.data will INCLUDE conditional elements and it
  // will submit the form as "Content-Type: application/json".
  const data = await formatDataForSumbit(form$.data)

  // Setting cancel token
  form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()

  return await form$.$vueform.services.axios.post(Constants.EDITCOMPANY,
  data /* | data | requestData */,
    {
      cancelToken: form$.cancelToken.token,
    }
  )
}

const removeFile = async (value, el$) => {

    console.log (value)

    await el$.$vueform.services.axios.request({
      url: Constants.REMOVEFILE,
      method: 'POST',
      data: el$.form$.convertFormData({
        id: value.tmp,
      }),
    })
}

</script>

<template>
  <Vueform 
    ref="form$" 
    form-key="company"
    :format-load="formatLoadedData" 
    :endpoint="submit" 
    method="post"
    @success="handleSuccess"
    @error="handleError"
    @reset="handleReset"
    @change="formChanged"
    :format-data="formatDataForSumbit"
    :previewUrl="Constants.ASSETS"
    >

    <template v-if="CompaniesEmpty">
      <ButtonElement name="addCompany" description="Add a Company if you own one." button-label="Add Company" @click="CompaniesEmpty = false"/>
    </template>
    <template v-else>

      <StaticElement v-if="logo != null"
        name="logo"
        :src="logo" 
        tag="img"
        :width="`${100}`"
        >
      </StaticElement>

      <FileElement
        view="image"
        description="Choose a logo"
        name="logo_upload"
        accept="image/*"
        :rules="[
          'max:1024',
        ]"
        :upload-temp-endpoint="{
          url: Constants.UPLOADFILE,
          method: 'POST'
          }"
        :remove-temp-endpoint="removeFile"
        :remove-endpoint="removeFile"
      />

      <ObjectElement name="company">
        <TextElement name="name" label="Name" :columns="columns" :disabled="CompanyExists"/>
        <TextElement name="status" label="Status" :columns="columns" v-if="CompanyExists" disabled/>
        <TextElement name="description" label="Description" :columns="columns"/>
        <TextElement name="website" label="Website" :columns="columns"/>

        <!-- Fields -->
        <ObjectElement name="fields" label="Custom Fields" :columns="columns">
          <template v-for="(item, index) in fields">
              <ObjectElement :name="index">
                <TextElement
                name="key"
                placeholder="Key"
                size="lg"
                :columns="{
                  default: 12,
                  sm: 6
                }"
                />
                <TextElement
                  name="value"
                  placeholder="Value"
                  size="lg"
                  :columns="{
                    default: 12,
                    sm: 6
                  }"
                />
              </ObjectElement>
          </template>
        </ObjectElement>
      </ObjectElement>
          
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
        }"
        />

      </GroupElement>
    </template>

  </Vueform>
</template>