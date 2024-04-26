// import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// 
const app = createApp(App);
// 
// 
import VueCookies from "vue-cookies";
app.use(VueCookies, { expires: "12h" }); //cookie保存7天

// 
// 
import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
// 
// 
app.use(createPinia());
app.use(router);

app.mount("#app");

