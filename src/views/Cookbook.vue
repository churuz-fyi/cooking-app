<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const cookbook = ref([]);

onMounted( async () => {
    try {
        const response = await axios.get(`http://10.207.150.10:10000/get_cookbook/${route.params.cookbook_id}`);
        cookbook.value = response.data;
        console.log("Cookbook data:", cookbook.value);
    } catch (error) {
        console.error("Error fetching cookbook:", error);
    }
});

const goToUser = (user_id) => {
    console.log('goToUser function triggered');
    console.log(user_id);
    router.push({ name: 'User Page', params: {user_id: user_id}});
};
</script>
<template>
    <div v-for="(item, index) in cookbook" :key="index" class = "border-2 rounded-md border-black bg-amber-100 divide-y divide-solid divide-black mx-40">
        <p class="text-center text-xl font-bold">{{ item.title }} # {{ item.id }}</p>
        <p @click="goToUser(item.userId_id)" class="text-center text-lg">{{ item.userid }}</p>
        <div class = "flex flex-col p-4 divide-y divide-solid divide-black">
            <p class="pb-1">Description: {{ item.description }}</p>
            <p class="pb-1">Meal Type: {{ item.mealType }}</p>
            <p class="pb-1">Time of Meal: {{ item.timeofMeal }}</p>
            <p class="pb-1">Country: {{ item.countryOfOrigin }}</p>
        </div>
    </div>
</template>