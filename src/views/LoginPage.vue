<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import userService from '../services/userService';
import crypto from '../tools/crypto';

const props = defineProps({
  // 登入後跳轉
  redirect: {
    type: String,
    default: undefined
  }
});

const account = ref('');
const password = ref('');

const router = useRouter();

// 登入
function login() {
  crypto.digestMessage(password.value)
        .then(pwd => userService.login({ account: account.value, password: pwd }))
        .then(response => {
          if (response.status === 200) {
            alert('success');
            // 設定token
            localStorage.setItem('token', response.data.token);

            // 跳轉回原網址
            if (props.redirect)
              router.push(props.redirect);
            else
              router.push({ name: 'home' });

            return;
          }
          alert('falied');
          return;
        });
}

// 前往註冊頁
function goToRegister() {
  router.push({ name: 'register' });
}

</script>

<template>
  <form
    style="padding-top: 10px; background-color: #f5f5f5;"
    @submit.prevent
  >
    <div class="mb-3">
      <label
        for="accountInput"
        class="form-label"
      >Account</label>
      <input
        id="accountInput"
        v-model="account"
        type="text"
        class="form-control"
      >
    </div>

    <div class="mb-3">
      <label
        for="passwordInput"
        class="form-label"
      >Password</label>
      <input
        id="passwordInput"
        v-model="password"
        type="password"
        class="form-control"
      >
    </div>

    <button
      class="btn btn-lg btn-primary"
      @click="login"
    >
      Log in
    </button>
    <button
      class="btn btn-lg btn-primary float-end"
      @click="goToRegister"
    >
      Register
    </button>
  </form>
</template>
