import './bootstrap';
import {createApp} from 'vue';
import router from './router.js';

/* import the fontawesome */
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
library.add(faUserSecret)

/* import the custom component */
import App from './components/app.vue';
import header from './components/layouts/header.vue';

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('v-header', header)
    .mount('#app');


