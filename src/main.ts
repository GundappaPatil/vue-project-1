
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { aliases, fa } from 'vuetify/iconsets/fa'
import type { Router } from 'vue-router';
import router from '@/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA0GpNcNcn6AJAqGCtrqcym8HGlABNNyzU",
  authDomain: "fruitshop-73bef.firebaseapp.com",
  projectId: "fruitshop-73bef",
  storageBucket: "fruitshop-73bef.appspot.com",
  messagingSenderId: "1086948501303",
  appId: "1:1086948501303:web:5d1b1aae2fc089b2139cb2",
  measurementId: "G-EKJLXFYTQF"
};

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
        },
      },
  })

  firebase.initializeApp(firebaseConfig)

const app = createApp(App).use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
