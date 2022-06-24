<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const headerMenu = reactive([{ id: 1, text: 'Personal Info' }, { id: 2, text: 'Example API' }]);
const currentMenuId = ref(1);

function clickHeader(id) {
  currentMenuId.value = id;
  switch (id) {
    case 1:
      router.push({ name: 'personalInfo' });
      break;
    case 2:
      router.push({ name: 'example' });
      break;
    default:
      break;

  }
}

</script>

<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <slot name="header">
          <a
            class="navbar-brand"
            href="javascript:void(0);"
            @click="router.push({ name: 'home' })"
          >Home Page</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            id="navbarCollapse"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li
                v-for="menu in headerMenu"
                :key="menu.id"
                @click="clickHeader(menu.id)"
              >
                <a
                  class="nav-link"
                  :class="{ active: menu.id === currentMenuId }"
                  href="javascript:void(0);"
                >{{ menu.text }}</a>
              </li>
            </ul>
          </div>
        </slot>
      </div>
    </nav>
  </header>

  <!-- Begin page content -->
  <main class="pt-3 flex-grow-1 container p-0">
    <slot>
      <h1 class="mt-5">
        Main
      </h1>
    </slot>
  </main>

  <footer class="py-3 bg-light border">
    <div class="container text-center">
      <span class="text-muted">
        Footer
      </span>
    </div>
  </footer>
</template>