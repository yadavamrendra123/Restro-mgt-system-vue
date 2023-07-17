import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';

import Update from './components/Update.vue';

import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: Home, name: 'Home'},
    { path: '/sign-up', component: SignUp,name: 'SignUp'},
    { path: '/login', component: Login, name: 'Login'},
    { path: '/update/:id', component: Update, name: 'Update'},
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;