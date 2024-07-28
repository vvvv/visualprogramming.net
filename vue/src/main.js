import App from './App.vue'
import { createApp } from 'vue'

const page = document.getElementById("app").getAttribute("page")

createApp(App, {
    page: page
})
.mount('#app')