<template>
    <nav class="flex flex-row justify-center items-center gap-4 bg-amber-300 p-3">
        <RouterLink to="/"><img src="../assets/icons8-home.svg" alt="home page"/></RouterLink>
        <RouterLink to="/newRecipe"><img src="../assets/icons8-add-50.png" alt="create new recipe"/></RouterLink>
        <RouterLink to="/newUser" class="border-2 border-black rounded-full p-2">New User</RouterLink>
        <RouterLink to="/user"><img src="../assets/icons8-user-40.png" alt="user icon"/></RouterLink>
    </nav>
</template>