// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
let config = {
  apiKey: 'AIzaSyBi-n23tWkLXEjZu3QhlOWLW_jQvmH3snY',
  authDomain: 'vue-firebase-tutorial-7babf.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tutorial-7babf.firebaseio.com',
  projectId: 'vue-firebase-tutorial-7babf',
  storageBucket: '',
  messagingSenderId: '539091447476'
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
