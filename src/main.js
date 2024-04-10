import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import Toaster from "@meforma/vue-toaster"
import Auth from './layout/wrapper/auth.vue'

const app = createApp(App)

app.use(router, Toaster)
app.component("default-layout", Default);
app.component("auth-layout", Auth);

app.mount("#app")