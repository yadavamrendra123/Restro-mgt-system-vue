

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import router from './router'

import App from './App.vue'


const app = createApp(App)

app.use(router)



app.mount('#app')
