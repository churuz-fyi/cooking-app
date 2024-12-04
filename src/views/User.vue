<script setup>

</script>
<template>
    <div class="text-2xl p-4 bg-white">
        <h1>User Dashboard</h1>
        <div class="flex flex-row gap-3">
            <p>USERNAME</p>
            <p># USERID</p>
        </div>
        <div class="flex flex-row gap-3">
            <p>FIRSTNAME LASTNAME</p>
            <p>JOINDATE</p>
        </div>
        <button @click="auth.logout">Logout</button>
    </div>
</template>