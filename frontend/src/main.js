import "./assets/main.css";
import { createApp } from "vue";

// 👇 Correct import from app.js with named export
import { DashboardComponent } from "../../apps/auth/assets/js/app.js";

const app = createApp({
  template: "<admin-dashboard />",
});

app.component("admin-dashboard", DashboardComponent);

app.mount("#app");
