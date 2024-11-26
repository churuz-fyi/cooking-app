import { createRouter,createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import NewRecipe from "./views/NewRecipe.vue";

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/newRecipe', component: NewRecipe, name: 'New Recipe'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;