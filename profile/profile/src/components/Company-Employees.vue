<script>

const RemoveEmployee = (index) =>
{
  const list$ = form$.value.el$('company.employees');
  const employee = form$.value.data.company.employees[index]
  
  if (employee.uuid != "")
  {
    removedEmployees.push({
      user: employee.user,
      action: "remove"
    })    
  }
  list$.remove(index);
}

const AddEmployee = () => {
  const list$ = form$.value.el$('company.employees');
  list$.add();
}

const existingEmployee = (index) => {
  if (form$.value !== null)
  {
    return form$.value.data.company.employees[index].uuid !== ""
  }
}

</script>
<template>
        <!-- Employees -->
        <ListElement
          name="employees"
          label="Employees"
          :controls="{remove: false, add: false}"
        >
          <template #default="{ index }">
            <ObjectElement :name="index">
              <HiddenElement name="uuid" default=""/>
              <TextElement name="user" size="lg" placeholder="E-Mail" :columns="{default: 12, sm: 6}" :disabled="existingEmployee(index)" />
              <SelectElement
                name="role"
                size="lg"
                placeholder="Role"
                rules="required"
                :columns="{default: 12, sm: 3}"
                :items="roles"
                :disabled="existingEmployee(index)"
              />
              <CheckboxElement name="status" :columns="{default: 12, sm: 1}" disabled :conditions="[['employees.*.uuid', '==', '']]"/>
              <ButtonElement name="remove" button-label="X" @click="RemoveEmployee(index)" :columns="{default: 12, sm: 1}" secondary />
            </ObjectElement>
          </template>
        </ListElement>
        <ButtonElement name="add" button-label="+" @click="AddEmployee" :columns="{default: 12, sm: 1}" secondary />
</template>