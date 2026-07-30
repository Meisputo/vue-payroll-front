<script setup>
import { ref } from 'vue';

  const EmpStatus = ref ([
    {
    statusName: 'Regular',
    description: 'Permanent',
    isActive: 'Active',
    },
    {
      statusName: 'Probation',
      description: '6-Months Probation',
      isActive: 'Active',
    },
]);


</script>

<template>

  <div class="head">
    <h1>
      Employment Status
    </h1>
  </div>

  <div>
    <v-table class="tablestat">
      <thead>
        <tr>

          <th class="text-left">Status Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in EmpStatus" :key="index">
          <td>{{ item.statusName }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.isActive }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>

</template>

<style>
.head {
  margin-left: 15%;
}
.tablestat {
  margin-top: 5%;
  margin-left: 15%;
  width: 83%;
  overflow-x: auto;
}

</style>