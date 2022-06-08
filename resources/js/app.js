import './bootstrap';
import {createApp} from 'vue';
import router from './router.js';

import App from './components/app.vue';
import header from './components/layouts/header.vue';

createApp(App)
    .use(router)
    .component('v-header', header)
    .mount('#app');


