<script setup>
import {reactive} from 'vue';
import axios from 'axios';

  const EmpForm = reactive({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = async () => {
    try {
      const res = await 
        axios.post(`http://localhost:8000/api/addEmps`,EmpForm.value);
      console.log(res.data);
    } 
    catch (error) {
      console.log(error)
    }
  }



</script>

<template>
  <div>
    <v-form @submit="handleSubmit">

    </v-form>
  </div>

</template>


<style></style>