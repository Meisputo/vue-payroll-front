<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const Employees = ref([  
  {
    //Employment status
    department: 'CICTO',
    position: 'Programmer',
    status: 'COS',
  },
  {
    //Employment status
    department: 'DTTMD',
    position: 'Admin Assistant',
    status: 'COS',
  },
])

</script>

<template>
  <div class="head">
    <h1> Positions <RouterLink to="/addemps"> <v-btn class="addbtn"> Add Employee </v-btn> </RouterLink>
    </h1>

  </div>
  <div>
      <v-table class="emptable" stipped="even" >
        <thead>
          <tr>
            <th class="text-left"> Department </th>
            <th class="text-left"> Position </th>
            <th class="text-left"> Status </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in Employees" :key="index">
            <td>{{ item.position }}</td>
            <td>{{ item.department }}</td>
            <td>{{ item.status }}</td>
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
