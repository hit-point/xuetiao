import { createApp } from "vue";
import App from "./app.vue";
import xuetiao from "@xuetiao/components";
const app = createApp(App);
app.use(xuetiao);
app.mount("#app");
