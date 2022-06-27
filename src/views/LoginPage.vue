<script setup>
import { inject, ref } from 'vue';
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

const $show = inject('$show');

// 登入
function login() {
  crypto.digestMessage(password.value)
        .then(pwd => userService.login({ account: account.value, password: pwd }))
        .then(response => {
          if (response.status === 200) {
            $show('success');
            // 設定token
            localStorage.setItem('token', response.data.token);

            // 跳轉回原網址
            if (props.redirect)
              router.push(props.redirect);
            else
              router.push({ name: 'home' });

            return;
          }
          $show('falied');
          return;
        });
}

// 前往註冊頁
function goToRegister() {
  router.push({ name: 'register' });
}

</script>

<template>
  <div class="h-100 d-flex">
    <div class="container align-self-center">
      <form
        @submit.prevent
      >
        <div class="mb-3 form-floating">
          <input
            id="accountInput"
            v-model="account"
            type="text"
            class="form-control"
            placeholder="placeholder"
          >
          <label
            for="accountInput"
            class="form-label"
          >帳號</label>
        </div>

        <div class="mb-3 form-floating">
          <input
            id="passwordInput"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="placeholder"
          >
          <label
            for="passwordInput"
            class="form-label"
          >密碼</label>
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
    </div>
  </div>
</template>
