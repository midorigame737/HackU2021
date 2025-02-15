import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(() => {
  new Vue({
    store,
    router,
    render: (h) => h(App),
  }).$mount('#app')
})
