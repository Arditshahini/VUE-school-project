import { createApp } from "vue";

/* importera bootstrap css och js som bootstrap använder */
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
/* sen måste man använda det också */
app.use(bootstrap);
app.mount("#app");
