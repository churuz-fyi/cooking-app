<script setup>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
import Banner from "./components/Banner.vue";

import { ref } from "vue";

const userFirstName = ref("John Doe");
</script>

<template>
    <NavBar />
    <Banner>
        <span>{{ userFirstName }}</span>
    </Banner>
    <main
        class="flex flex-col gap-6 p-6 text-3xl bg-white"
        id="main-page-results"
    >
        <div>
            <h1>Breakfast</h1>
            <div id="carousel_1" class="flex flex-row gap-4"></div>
        </div>

        <div>
            <h1>Drinks</h1>
            <div id="carousel_2" class="flex flex-row gap-4"></div>
        </div>

        <div>
            <h1>Late Treats</h1>
            <div id="carousel-_3" class="flex flex-row gap-4"></div>
        </div>
    </main>
    <FooterComp />
</template>
