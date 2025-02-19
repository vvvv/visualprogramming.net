<script>
</script>
<template>
        <StaticElement
            name="workfor_title"
            content="Work for"
            tag="h2"
            />

        <ListElement name="workFor" :controls="{add: false, remove: false, sort: false}">
        <template #default="{ index }">
          <ObjectElement
          :name="index"
          >
              <TextElement 
              name="company"
              label="Company"
              disabled
              :columns="{
                sm: { container: 12, label: 4, wrapper: 12 },
                lg: { container: 7, label: 12, wrapper: 12 }
              }"
              />
              <TextElement 
              name="role"
              label="Role"
              disabled
              :columns="{
                sm: { container: 12, label: 4, wrapper: 12 },
                lg: { container: 3, label: 12, wrapper: 12 }
              }"
              />
            <ToggleElement 
              name="status" label="Confirm"
              true-value="confirmed"
              false-value="pending"
              :columns="{
                sm: { container: 12, label: 4, wrapper: 12 },
                lg: { container: 2, label: 12, wrapper: 12 }
              }"
              />
            <StaticElement
              name="divider"
              tag="hr"
            />
         </ObjectElement>
        </template>
    </ListElement>
</template>