<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import BaseLayout from './views/BaseLayout.vue';

import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

const alreadyLogin = computed(() => {
  return route.path.includes('login') || route.path.includes('register');
});


</script>

<template>
  <BaseLayout>
    <template
      v-if="alreadyLogin"
      #header
    >
      <a
        class="navbar-brand"
        href="#"
        @click="router.push({ name: 'home' })"
      >Home Page</a>
    </template>

    <RouterView />
  </BaseLayout>
</template>

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>