<script setup>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
</script>

<template>
    <NavBar />
    <main>
        <RouterView></RouterView>
    </main>
        
    <FooterComp />
</template>
