<script setup>
import { useRouter } from 'vue-router';

defineProps({
    cookbook: {
        Type: Object,
        Required: true,
    },
});

const router = useRouter();

const goToCookbook = (id) => {
    console.log('goToCookbook function triggered');
    console.log(id);
    router.push({ name: 'Cookbook', params: {cookbook_id: id}});
}
</script>
<template>
    <div @click="goToCookbook(cookbook.id)" class = "bg-amber-100 h-32 w-52 p-3 rounded-lg 
    border-2 border-black shadow-2xl my-4 mx-4"> 
        <h1 class = "text-lg text-center font-bold">{{ cookbook.title }}</h1>
        <div>
            <p class="text-center p-1">{{ cookbook.userId }}</p>
        </div>
        <div class = "flex flex-row text-xs gap-2 py-0.5"> 
            <p class = "bg-amber-200 text-center flex-auto rounded-md border-2 border-black p-0.5">{{cookbook.timeofMeal}}</p>
            <p class = "bg-amber-200 text-center flex-auto rounded-md border-2 border-black p-0.5">{{cookbook.mealType}}</p>
            <p class = "bg-amber-200 text-center flex-auto rounded-md border-2 border-black p-0.5">{{cookbook.countryOfOrigin}}</p>
        </div>
    </div>
</template>