import { createApp } from 'vue'
import App from './App.vue'



// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(vuetify).use(router).mount('#app')

import {createRouter, createWebHashHistory}  from  'vue-router'
import Homepage from './views/Homepage.vue' 

const routes = [
  {
    path: '/' ,
    component: Homepage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router




