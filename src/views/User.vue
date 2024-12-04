<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const user_data = ref([]);

onMounted( async () => {
    try {
        const response = await axios.get(`http://localhost:5000/get_user/${route.params.user_id}`);
        user_data.value = response.data;
        console.log("Recipe:",user_data.value);
    } catch (error) {
        console.error("Error fetching recipe:", error);
    }
});
</script>
<template>
    <div v-for="(item, index) in user_data" :key="index" class="text-2xl p-4 bg-white">
        <h1>User Dashboard</h1>
        <div class="flex flex-row gap-3 font-bold">
            <p>{{item.username}}</p>
            <p># {{ item.id }}</p>
        </div>
        <div class="flex flex-row gap-3">
            <p>{{item.firstName}} {{item.lastName}}</p>
            <p>Joined: {{ item.joinDate }}</p>
        </div>
    </div>
</template>