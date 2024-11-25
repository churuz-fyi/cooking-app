<script setup>
import Banner from "../components/Banner.vue";

import { ref } from "vue";

const userFirstName = ref("John Doe");
</script>
<template>
    <Banner>
        <span>{{ userFirstName }}</span>
    </Banner>
    <h1>HOME</h1>
</template>