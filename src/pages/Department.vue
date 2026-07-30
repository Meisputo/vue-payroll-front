<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const Employees = ref([
    {
      //Employment status
      departmentName: 'Information Technology',
      description: 'Junior Programmer',
      empNum: '2',
    },
    {
      //Employment status
      departmentName: 'Information Technology',
      description: 'Full-stack Developer',
      empNum: '1',
    },
  ])

</script>

<template>
  <div class="head">
    <h1> Department <RouterLink to="/addemps"> <v-btn class="addbtn"> Add Employee </v-btn> </RouterLink>
    </h1>

  </div>
  <div>
      <v-table class="emptable" stipped="even" >
        <thead>
          <tr>
            <th class="text-left"> Department </th>
            <th class="text-left"> Description </th>
            <th class="text-left"> Number of Employee </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in Employees" :key="index">
            <td>{{ item.departmentName }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.empNum }}</td>
          </tr>
        </tbody>
      </v-table>
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
.emptable {
  margin-top: 5%;
  margin-left: 15%;
  width: 83%;
  overflow-x: auto;
}
</style>
