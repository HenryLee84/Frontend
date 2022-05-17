<script setup>
import { ref } from 'vue';
import userService from '../services/userService';

const user = ref(null);
const done = ref(false);

userService.getUser()
           .then((response) => {
             if (response.status === 200) {
               user.value = response.data;
               done.value = true;
             }
           });
</script>

<template>
  personal info
  <table v-if="done">
    <tr
      v-for="(value, key) in user"
      :key="key"
    >
      <td>{{ key }}</td>
      <td>{{ value }}</td>
    </tr>
  </table>
</template>