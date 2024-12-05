<template>
    <nav class="flex flex-row justify-center items-center gap-4 bg-amber-300 p-3">
        <RouterLink to="/"><img src="../assets/icons8-home.svg" alt="home page"/></RouterLink>
        <RouterLink to="/newRecipe" class="border-2 border-black rounded-full p-2">New Recipe</RouterLink>
        <RouterLink to="/newCookbook" class="border-2 border-black rounded-full p-2">New Cookbook</RouterLink>
        <RouterLink to="/newUser" class="border-2 border-black rounded-full p-2">New User</RouterLink>
    </nav>
</template>