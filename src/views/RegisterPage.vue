<script setup>
import { computed, inject, ref } from 'vue';
import router from '../router';
import userService from '../services/userService';
import crypto from '../tools/crypto';

const name = ref('');
const account = ref('');
const password = ref('');

const nameValid = ref(false);
const accountValid = ref(false);
const passwordValid = ref(false);

const $show = inject('$show');

const valid = computed(() => nameValid.value && accountValid.value && password.value);

// 註冊
function register() {
    validate();
    if (!valid.value)
        return;

    crypto.digestMessage(password.value)
          .then(pwd => userService.register({ account: account.value, password: pwd }))
          .then(response => {
            if (response.status === 200) {
              $show('complete');

              // 設定token
              localStorage.setItem('token', response.data.token);

              router.push({ name: 'home' });

              return;
            } else if (response.status === 409) {
              $show('conflict');

              return;
            } else {
              $show('error');

              return;
            }
          });
}

// 驗證
function validate() {
    nameValid.value = true;
    accountValid.value = true;
    passwordValid.value = true;

    // name
    if (name.value === '') {
        nameValid.value = false;
    }

    // account
    if (account.value === '') {
        accountValid.value = false;
    }

    // password
    if (password.value === '') {
        passwordValid.value = false;
    }
}


</script>

<template>
  <form
    style="padding-top: 10px; background-color: #f5f5f5;"
    @click.prevent
  >
    <div class="mb-3">
      <label
        for="nameInput"
        class="form-label"
      >Name</label>
      <input
        id="nameInput"
        v-model="name"
        type="text"
        class="form-control"
        required
      >
    </div>

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
      @click="register"
    >
      Register
    </button>
  </form>
</template>