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
        href="javascript:void(0);"
        @click="router.push({ name: 'home' })"
      >Home Page</a>
    </template>

    <RouterView />
  </BaseLayout>
</template>