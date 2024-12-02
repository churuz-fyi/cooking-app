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
        title: '',
        description: '',
        userId: '',
        created: currentDateSQLFormat,
        prepTime: '',
        cookTime: '',
        recyield: '',
        season: '',
        timeofmeal: '',
        mealType: '',
        countryOfOrigin: ''
    });

    const message = ref('');
    const showPopup = ref(false);


    const handleSubmit = async () => {
        try {
            const apiUrl = "http://localhost:5000/insert";
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData.value),
            });

            const result = await response.json();

            if (response.ok) {
                message.value = 'Recipe submitted correctly!';
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
    <!--popup-->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-content">
            <p>{{ message }}</p>
            <button @click="closePopup">Close</button>
        </div>
    </div>

    <!--page-->
    <div class="flex flex-col gap-2 bg-white p-6">
        <h1 class="text-4xl">New Recipe</h1>
        <form class="flex flex-col gap-2" @submit.prevent="handleSubmit"> <!--form for creating a new recipe-->
            <input v-model="formData.title" class="border b-2 p-2 text-2xl rounded-full w-full" id="titleInput" type="text" placeholder="Recipe title..."/>
            <label for="descriptionInput">Description:</label>
            <input v-model="formData.description" class="border b-2 p-2 text-1 w-full h-40" id="newRecipeDescriptionInput" type="text"/>
            
            <!--cook times-->
            <div class="flex gap-2">
                <input v-model="formData.userId" class="border b-2 p-2 text-l rounded-full" id="userIdInput" type="text" placeholder="Your name..."/>
                <input v-model="formData.prepTime" class="border b-2 p-1 text-1 rounded-full" id="prepTimeInput" type="text" placeholder="Prep time..."/>
                <input v-model="formData.cookTime" class="border b-2 p-1 text-1 rounded-full" id="cookTimeInput" type="text" placeholder="Cook Time..."/>
                <input v-model="formData.recyield" class="border b-2 p-1 text-1 rounded-full" id="yieldInput" type="text" placeholder="Yield amount..."/>
            </div>

            <!--tags-->
            <div class="flex flex-row gap-3">
                <div class="flex flex-row gap-1">
                    <label for="seaasonInput">Seasons:</label>
                    <select v-model="formData.season" class="border b-2 p-1 text-1 rounded-full" id="seasonSelect" name="seasonSelect">
                        <option value="1">Spring</option>
                        <option value="2">Summer</option>
                        <option value="3">Fall</option>
                        <option value="4">Winter</option>
                        <option value="5">Monsoon</option>
                        <option value="6">Autumn</option>
                    </select>
                </div>

                <div class="flex flex-row gap-1">
                    <label for="timeofMealSelect">Time of Meal:</label>
                    <select v-model="formData.timeofmeal" class="border b-2 p-1 text-1 rounded-full" id="timeofMealSelect" name="timeofMealSelect">
                        <option value="1">Breakfast</option>
                        <option value="2">Brunch</option>
                        <option value="3">Lunch</option>
                        <option value="4">Jeanevive</option>
                        <option value="5">Dinner</option>
                        <option value="6">Midnight Snack</option>
                    </select>
                </div>

                <div class="flex flex-row gap-1">
                    <label for="typeofMealSelect">Type of Meal:</label>
                    <select v-model="formData.mealType" class="border b-2 p-1 text-1 rounded-full" id="typeofMealSelect" name="typeofMealSelect">
                        <option value="1">Meal</option>
                        <option value="2">Snack</option>
                        <option value="3">Drink</option>
                        <option value="4">Dessert</option>
                        <option value="5">Appetizer</option>
                        <option value="6">Soup</option>
                    </select>
                </div>

                <div class="flex flex-row gap-1">
                    <label for="countryofOriginSelect">Country:</label>
                    <select v-model="formData.countryOfOrigin" class="border b-2 p-1 text-1 rounded-full" id="countryofOriginSelect" name="countryofOriginSelect">
                        <option value="1">Italy</option>
                        <option value="2">India</option>
                        <option value="3">USA</option>
                        <option value="4">Japan</option>
                        <option value="5">France</option>
                        <option value="6">Mexico</option>
                        <option value="7">Brazil</option>
                        <option value="8">China</option>
                    </select>
                </div>
            </div>
            <button type="submit">Create Recipe</button>
        </form>
    </div>
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

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
