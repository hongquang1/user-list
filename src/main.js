import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css';
import elementPlus from 'element-plus'

const app = createApp(App)
app.use(elementPlus)
app.mount('#app')
