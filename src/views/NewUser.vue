<script setup>
import { ref } from 'vue';
    
const currentDateSQLFormat = (() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
})();

const formData = ref({
    username: '',
    firstName: '',
    lastName: '',
    joinDate: currentDateSQLFormat,
});

const message = ref('');
const showPopup = ref(false);

const handleSubmit = async () => {
    try {
        const apiUrl = "http://10.207.150.10:10000/new_user";
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData.value),
        });

        const result = await response.json();

        if (response.ok) {
            message.value = 'User created correctly!';
        } else {
            throw new Error(result.error || 'Submission failed');
        }

        showPopup.value = true;
    } catch (error) {
        console.error('Error during submission:', error);
        message.value = `Error: ${error.message || 'An unknown error occurred'}`;
        showPopup.value = true;
    }
};

const closePopup = () => {
    showPopup.value = false;
};
</script>

<template>
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-content">
            <p>{{ message }}</p>
            <button @click="closePopup">Close</button>
        </div>
    </div>
    <form @submit.prevent="handleSubmit">
        <input v-model="formData.username" placeholder="username" type="text"/>
        <input v-model="formData.firstName" placeholder="first name" type="text"/>
        <input v-model="formData.lastName" placeholder="last name" type="text"/>
        <button @click="submit">Submit</button>
    </form>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>