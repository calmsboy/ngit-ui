import { createApp } from 'vue'
import App from './App.vue'
import ngitUI from "ngit-ui";
import "ngit-ui/dist/style.css"

const app = createApp(App)
app.use(ngitUI)
app.mount('#app')
