import {createApp} from 'vue'
import store from "@/store";
import router from './router';
import PrimeVue from 'primevue/config';
import VCalendar from 'v-calendar';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import AppWrapper from "@/AppWrapper.vue";

import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "leaflet/dist/leaflet.css";
import 'v-calendar/dist/style.css';

import Card from "primevue/card";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from "primevue/button";
import ProgressSpinner from 'primevue/progressspinner';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import Dialog from 'primevue/dialog';
import TabMenu from 'primevue/tabmenu';
import ProgressBar from 'primevue/progressbar';
import Galleria from 'primevue/galleria';
import Panel from 'primevue/panel';
import Tag from 'primevue/tag';
import Badge from 'primevue/badge';
import Chip from 'primevue/chip';
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import Image from 'primevue/image';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';


const app = createApp(AppWrapper);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(VCalendar, {});
app.use(ToastService);
app.use(ConfirmationService);

app.component('Card', Card);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Button', Button);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Textarea', Textarea);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);
app.component('FileUpload', FileUpload);
app.component('Dialog', Dialog);
app.component('TabMenu', TabMenu);
app.component('ProgressBar', ProgressBar);
app.component('Galleria', Galleria);
app.component('Panel', Panel);
app.component('Tag', Tag);
app.component('Badge', Badge);
app.component('Chip', Chip);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Image', Image);
app.component('Toast', Toast);
app.component('ConfirmDialog', ConfirmDialog);

app.mount('#app');
