<script setup>
import { useRouter } from 'vue-router';
defineProps({
    recipe: {
        type: Object,
        Required: true,
    },
});
const router = useRouter();

const goToRecipe = (id) => {
    console.log('goToRecipe function triggered');
    console.log(id);
    router.push({ name: 'Recipe', params: {id: id} });

};
</script>

<template>
    <!--Box for carousel recipe view-->
    <div @click="goToRecipe(recipe.id)" class = "bg-amber-100 h-48 w-52 p-3 rounded-lg 
    border-2 border-black shadow-2xl my-4 mx-4"> 
        <h1 class = "text-lg text-center font-bold">{{ recipe.title }}</h1>
        <div>
            <p class="text-center p-1">{{ recipe.userId }}</p>
        </div>
        <div class = "flex flex-row text-xs gap-2 py-0.5"> 
            <p class = "bg-amber-200 text-center flex-auto rounded-md border-2 border-black p-0.5">{{recipe.timetoeat}}</p>
            <p class = "bg-amber-200 text-center flex-auto rounded-md border-2 border-black p-0.5">{{recipe.mealType}}</p>
            <p class = "bg-amber-200 text-center flex-auto rounded-md border-2 border-black p-0.5">{{recipe.season}}</p>
        </div>
        <div class = "flex flex-row flex-initial text-sm py-0.5">
            <img src="../assets/icons8-clock-50.png">
            <div class="flex flex-col space-y-0.5 pt-1.5">
                <p class="">Prep: {{recipe.prepTime}}</p>
                <p class="">Cook: {{recipe.cookTime}}</p>
            </div>
        </div>
    </div>
</template>