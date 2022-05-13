<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToRegister() {
  router.push({ name: 'register' });
}

</script>

<template>
  <form
    style="padding-top: 10px; background-color: #f5f5f5;"
    @click.prevent
  >
    <div class="mb-3">
      <label
        for="accountInput"
        class="form-label"
      >Account</label>
      <input
        id="accountInput"
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
        type="password"
        class="form-control"
      >
    </div>

    <button
      class="btn btn-lg btn-primary"
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
