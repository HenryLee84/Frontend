<script setup>
import { reactive, ref, toRefs } from 'vue';
import userService from '../services/userService';
import crypto from '../tools/crypto';

const user = ref(null);
const done = ref(false);

const password = reactive({
  oldP: null,
  newP: null,
  confirmP: null
});

// 更改密碼
function changePassword() {
  const { oldP, newP, confirmP } = toRefs(password);

  if (newP.value !== confirmP.value) {
    alert('密碼不相同');
    return;
  }

  Promise.all([crypto.digestMessage(oldP.value), crypto.digestMessage(newP.value)])
         .then(([originalPassword, newPassword]) => {
           console.log(originalPassword, newPassword);
           return userService.UpdateUserPassword({ originalPassword, newPassword });
         })
         .then(response => {
           switch (response.status) {
             case 200:
              alert('成功更新密碼');
              return;
             case 404:
              alert ('舊密碼錯誤');
              oldP.value = null;
              return;
             default:
              alert('系統錯誤');
              return;
           }
         });
}


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
      <td class="px-4">
        {{ value }}
      </td>
    </tr>
  </table>

  <form
    class="py-4"
    style="background-color: #f5f5f5;"
    @submit.prevent
  >
    <div class="mb-3">
      <label
        for="oldPasswordInput"
        class="form-label"
      >舊密碼</label>
      <input
        id="oldPasswordInput"
        v-model="password.oldP"
        type="password"
        class="form-control"
      >
    </div>

    <div class="mb-3">
      <label
        for="newPasswordInput"
        class="form-label"
      >新密碼</label>
      <input
        id="newPasswordInput"
        v-model="password.newP"
        type="password"
        class="form-control"
      >
    </div>

    <div class="mb-3">
      <label
        for="confirmPasswordInput"
        class="form-label"
      >確認新密碼</label>
      <input
        id="confirmPasswordInput"
        v-model="password.confirmP"
        type="password"
        class="form-control"
      >
    </div>

    <button
      class="btn btn-lg btn-primary"
      @click="changePassword"
    >
      更改密碼
    </button>
  </form>
</template>