import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Model from './components/Model';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Model);

app.mount('#app');
