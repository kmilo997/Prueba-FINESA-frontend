import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify' // path to vuetify export
import axios from 'axios'
import VueSwal from 'vue-swal'
import VueAxios from 'vue-axios'

// Router
import VueRouter from 'vue-router'
import { routes } from './routes'


const router = new VueRouter({
    mode:'history',
    routes:routes
})

Vue.use(VueRouter)
Vue.use(VueSwal)
Vue.use(Vuetify)
Vue.use(VueAxios, axios)

new Vue({
    vuetify: new Vuetify(),
    router:router,
    render: h => h(App)
}).$mount('#app');