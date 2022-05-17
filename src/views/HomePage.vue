<script setup>

function Logout() {
  localStorage.removeItem('token');
}

</script>

<template>
  home page

  <button
    class="btn btn-lg btn-primary"
    @click="Logout"
  >
    Log out
  </button>
</template>