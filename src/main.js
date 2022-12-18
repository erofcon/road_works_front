import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "leaflet/dist/leaflet.css";

const app = createApp(App);

app.use(router);
app.mount('#app');
