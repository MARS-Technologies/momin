import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import feather from 'vue-icon'



createApp(App).use(feather, 'v-icon').use(store).use(router).mount('#app')
