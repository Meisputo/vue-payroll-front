<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const Employees = ref([{
  name: {
    first: 'Clyde Ken',
    last: 'Matangcas',
  },
  email: 'Clydeken88@gmail.com',
  phone: '09455982514',
  address: 'Baan Km.3',
  gender: 'Male',
  birthday: '01-23-1998',

  //Employment status
  department: 'CICTO',
  position: 'Programmer',
  status: 'COS',
},
{
  name: {
    first: 'pidot',
    last: 'Adbot',
  },
  email: 'Pidot88@gmail.com',
  phone: '09455982514',
  address: 'Baan Km.3',
  gender: 'Male',
  birthday: '01-23-1998',

  //Employment status
  department: 'CICTO',
  position: 'Programmer',
  status: 'COS',
},
{
  name: {
    first: 'Clyde Ken',
    last: 'Matangcas',
  },
  email: 'Clydeken88@gmail.com',
  phone: '09455982514',
  address: 'Baan Km.3',
  gender: 'Male',
  birthday: '01-23-1998',

  //Employment status
  department: 'CICTO',
  position: 'Programmer',
  status: 'COS',
}])

</script>

<template>
  <div class="head">
    <h1> Employee List <RouterLink to="/addemps"> <v-btn class="addbtn"> Add Employee </v-btn> </RouterLink>
    </h1>

  </div>
  <div>
      <v-table class="emptable" stipped="even" >
        <thead>
          <tr>
            <th class="text-left"> Firstname</th>
            <th class="text-left"> Lastname</th>
            <th class="text-left"> Email</th>
            <th class="text-left"> Phone</th>
            <th class="text-left"> Address</th>
            <th class="text-left"> Gender </th>
            <th class="text-left"> Birthday </th>
            <th class="text-left"> Department </th>
            <th class="text-left"> Position </th>
            <th class="text-left"> Status </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in Employees" :key="index">
            <td>{{ item.name.first }}</td>
            <td>{{ item.name.last }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.birthday }}</td>
            <td>{{ item.department }}</td>
            <td>{{ item.position }}</td>
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
