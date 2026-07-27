<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="head">
    <h1> Employee List <RouterLink to="/addemps"> <v-btn class="addbtn"> Add Employee </v-btn> </RouterLink> </h1>
      
  </div>
    <div>

    </div>

</template>

<style> 
.head {
  margin-left: 15%;
}

.addbtn {
  margin-left: 70%;
  background-color: #4CAF50;
  color: white;
  border: none;
  text-align: center;
}

</style>
