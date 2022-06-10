import './bootstrap';
import {createApp} from 'vue';
import router from './router.js';

/* import the custom component */
import App from './components/app.vue';
import header from './components/layouts/header.vue';
import SearchBox from './components/search-box.vue';

createApp(App)
    .use(router)
    .component('v-header', header)
    .component('v-search-box', SearchBox)
    .mount('#app');


