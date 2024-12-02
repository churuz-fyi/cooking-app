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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;