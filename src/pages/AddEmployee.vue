<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

  const EmpForm = reactive({
    name: {
      first: '',
      last: '',
    },
      email: '',
      phone: '',
      address: '',
      gender: '',
      birthday: '',

    //Employment status
      department: '',
      position: '',
      status: '',
  });
  const genderSelect = [
    'Male',
    'Female'
  ]
  const selectStatus = [
    'Contract',
    'Permanent',
    'Probation'
  ]

const handleSubmit = async () => {
  try {
    const res = await
      axios.post(`http://localhost:8000/api/addEmps`, EmpForm.value);
    console.log(res.data);
  }
  catch (error) {
    console.log(error)
  }
}



</script>

<template>
  <div class="head">
    <h1>
      Add New Employee
    </h1>
  </div>
  <div>
    <v-form @submit="handleSubmit">
      <v-container>
        <div class="form">
          <v-row>
            <div>
              <h2>Personal Info</h2>
            </div>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="EmpForm.name.first" label="First name"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="EmpForm.name.last" label="Last Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="EmpForm.email" type="email" label="Email"></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="EmpForm.address" label="Address"></v-text-field>
          </v-col>
          <v-row>
            <v-col cols="2" md="6">
              <v-select v-model="EmpForm.gender" :items="genderSelect" label="Gender"></v-select>
            </v-col>
            <v-col cols="2" md="6">
            <v-date-input v-model="EmpForm.birthday" type="calendar" label="Birthday"></v-date-input>
          </v-col>
          </v-row>
          <v-row>
            <div>
              <h2>Employment Info</h2>
            </div>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="EmpForm.department" label="Department"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="EmpForm.position" label="Position"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select v-model="EmpForm.status" :items="selectStatus" label="Status"></v-select>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-form>
  </div>

</template>


<style>
.head {
  margin-left: 15%;
}

.form {
  margin-left: 15%;
}
</style>