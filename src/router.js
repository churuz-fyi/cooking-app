import { createRouter,createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/newRecipe',
        name: 'New Recipe',
        component: () => import('./views/NewRecipe.vue'),
    },
    {
        path: '/user/:user_id',
        name: 'User Page',
        component: () => import('./views/User.vue'),
        props: true,
    },
    {
        path: '/newUser',
        name: 'New User',
        component: () => import('./views/NewUser.vue'),
    },
    {
        path: '/recipe/:id',
        name: 'Recipe',
        component: () => import('./views/Recipe.vue'),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;