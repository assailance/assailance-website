import '@/assets/index.css'

import { createApp } from 'vue'

import App from '@/App.vue'
import { pressAnimate } from '@/directives/press-animate.directive.ts'

const app = createApp(App)
app.directive('press-animate', pressAnimate)
app.mount('#app')
