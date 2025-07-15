import '@/assets/index.css'

import { createApp } from 'vue'

import App from '@/App.vue'
import { pressAnimate } from '@/directives/press-animate.directive.ts'
import router from '@/router.ts'

const app = createApp(App)
app.use(router)
app.directive('press-animate', pressAnimate)
app.mount('#app')
