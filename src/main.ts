import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxe from "./plugins/vue-axe";

const app = createApp(App);

app.use(router);

VueAxe.install(app).then(() => {
  app.mount("#app");
});
