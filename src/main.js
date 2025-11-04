import { createPinia } from 'pinia'
// main.js
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
// Vuetify setup (if you're using Vuetify)
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router) // ✅ this is the key line
app.use(createPinia())
app.use(vuetify)

app.mount('#app')
