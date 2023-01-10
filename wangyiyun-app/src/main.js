import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import getVant from './plugins'

const app = createApp(App)
app.use(router)
getVant(app)
app.mount('#app')

