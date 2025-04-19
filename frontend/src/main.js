import { createApp } from 'vue'
import './style.css'


// import App from './App.vue'
// createApp(App).mount('#app')



const app = createApp({});

import { DashboardComponent } from "../../apps/auth/assets/js/app.js";
app.component("admin-dashboard", DashboardComponent);

app.mount("#app");