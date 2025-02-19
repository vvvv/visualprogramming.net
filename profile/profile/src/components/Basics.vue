<script setup>
  import { ref, watch, onMounted } from 'vue'
  import Constants from './../constants'

  const emit = defineEmits(['reload'])

  const { data, constants, keycloak } = defineProps(['data', 'constants', 'keycloak'])
  const isChanged = ref(false)
  const form$ = ref(null)
  const userpic = ref(null)
  var fields = new Array(4)
  var tempUserpic = ""
  const columns = {
    sm: { container: 12, label: 4, wrapper: 12 },
    lg: { container: 12, label: 4, wrapper: 12 }
  }

  onMounted(async ()=>{
    fields = fields.map ((e)=>{
      return {
        key: "",
        value: ""
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

const formatLoadedData = (data) => {

  if (data.user.userpic != null)
  {
    userpic.value = Constants.ASSETS + data.user.userpic;
  }

  var d = {
      basics:{
        name: data.user.name,
        surname: data.user.surname,
        username: data.user.username,
        statement: data.user.statement,
        homepage: data.user.homepage,
        email: data.user.email,
        newsletter: data.user.newsletter,
        userpic: data.user.userpic,
      },
      social:
      {
        github: data.social.github,
        nuget: data.social.nuget
      },
      fields: data.social.fields
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
      if (error)
      {
        form$.messageBag.append(error)
      }
      break
  }
}

const formChanged = (data)=>
{
  isChanged.value = true
}

const submit = async (FormData, form$) => {

  form$.messageBag.clear()

  // Using form$.data will INCLUDE conditional elements and it
  // will submit the form as "Content-Type: application/json".
  const data = await formatDataForSumbit(form$.data)

  // Setting cancel token
  form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()

  return await form$.$vueform.services.axios.post(Constants.EDITBASICS,
  data,
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

const formatDataForSumbit = async (requestData) => { 
  try {

    if (requestData.basics.avatar_upload)
    {
      requestData.basics.userpic = tempUserpic = requestData.basics.avatar_upload.tmp;
      delete requestData.basics.avatar_upload
    }

    const token = await keycloak.getAccessToken()

    var postData = {
      token: token,
      basics: requestData.basics,
      social: {
        nuget: requestData.social.nuget,
        github: requestData.social.github,
        fields: requestData.fields
      }
    }

    return postData;

  } catch (error) {
    throw error // this will cancel the submit process
  }
}

</script>

<template>
  <Vueform 
    ref="form$" 
    form-key="basics"
    method="post"
    @success="handleSuccess"
    @error="handleError"
    @change="formChanged"
    :endpoint="submit"
    :format-load="formatLoadedData" 
    :format-data="formatDataForSumbit"
    :previewUrl="Constants.ASSETS"
    >

    <StaticElement v-if="userpic != null"
        name="userpic" 
        tag="img"
        :src="userpic"
        :width="`${100}`"
        >
    </StaticElement>

    <ObjectElement name="basics">

        <!-- TODO: ADD TOKEN FOR UPLOADING -->
        <FileElement
          view="image"
          name="avatar_upload"
          accept="image/*"
          description="Choose an avatar"
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

        <TextElement name="username" label="Username" :columns="columns" disabled/>
        <TextElement name="email" :columns="columns" label="Email" disabled/>
        <TextElement name="name" :columns="columns" label="Name"/>
        <TextElement name="surname" :columns="columns" label="Surname"/>
        <TextElement name="homepage" :columns="columns" label="Homepage"/>
        <TextareaElement name="statement" :columns="columns" label="Statement"/>
        <ToggleElement name="newsletter" true-value="true" false-value="false" :columns="columns" label="Newsletter"/>
      </ObjectElement>
      <ObjectElement name="social" label="Social" :columns="columns">
          <TextElement
          name="github"
          placeholder="GitHub"
          size="lg"
          :columns="{
            default: 12,
            sm: 6
          }"
          />
          <TextElement
            name="nuget"
            placeholder="NuGet"
            size="lg"
            :columns="{
              default: 12,
              sm: 6
            }"
          />
        </ObjectElement>

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
      
      <StaticElement tag="hr" name="separator"/>

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