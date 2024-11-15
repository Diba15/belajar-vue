import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CustomNavbar from '@/components/Navbar.vue'
import CustomFooter from '@/components/Footer.vue'

const app = createApp(App)

app.component('custom-navbar', CustomNavbar).component('custom-footer', CustomFooter)

app.mount('#app')
