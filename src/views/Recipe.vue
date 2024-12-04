<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const recipe = ref([]);

onMounted( async () => {
    try {
        const response = await axios.get(`http://localhost:5000/get_recipe/${route.params.id}`);
        recipe.value = response.data;
        console.log("User Data:",recipe.value);
    } catch (error) {
        console.error("Error fetching recipe:", error);
    }
});

const goToUser = (user_id) => {
    console.log('goToUser function triggered');
    console.log(user_id);
    router.push({ name: 'User Page', params: {user_id: user_id}});
};
</script>
<template>
    <div v-for="(item, index) in recipe" :key="index" class = "border-2 rounded-md border-black bg-amber-100 divide-y divide-solid divide-black mx-40">
        <p class="text-center text-xl font-bold">{{ item.title }} # {{ item.id }}</p>
        <p @click="goToUser(item.userId_id)" class="text-center text-lg">{{ item.userId }}</p>
        <div class = "flex flex-col p-4 divide-y divide-solid divide-black">
            <p class="pb-1">Description: {{ item.description }}</p>
            <p class="pb-1">Meal Type: {{ item.mealType }}</p>
            <p class="pb-1">Time of Meal: {{ item.timetoeat }}</p>
            <div class="flex flex-row pb-1">
                <p>Prep time: {{ item.prepTime }}</p>
                <p class="px-4">Cook time: {{ item.cookTime }}</p>
            </div>
            <p class="pb-1">Yield: {{ item.recyield }}</p>
            <p class="pb-1">Country: {{ item.countryOfOrigin }}</p>
            <p class="pb-1">Season: {{ item.season }}</p>
        </div>
    </div>
</template>