import {createApp} from 'vue'
import store from "@/store";
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "leaflet/dist/leaflet.css";
import 'v-calendar/dist/style.css';
import 'vue-image-zoomer/dist/style.css';

import VCalendar from 'v-calendar';
import VueZoomer from 'vue-zoomer'

const app = createApp(App);

app.use(VCalendar, {});
app.use(VueZoomer);
app.use(router);
app.use(store);

app.mount('#app');
