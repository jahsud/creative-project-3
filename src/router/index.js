import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Music from '../views/Music.vue'
import Movies from '../views/Movies.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/music',
        name: 'Music',
        component: Music
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router