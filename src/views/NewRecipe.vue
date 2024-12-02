<script setup>

</script>

<template>
    <div class="flex flex-col gap-2 bg-white p-6">
        <h1 class="text-4xl">New Recipe</h1>
        <form class="flex flex-col gap-2"> <!--form for creating a new recipe-->
            <input class="border b-2 p-2 text-2xl rounded-full w-full" id="newRecipeTitleInput" type="text" placeholder="Recipe title..."/>
            <input class="border b-2 p-2 text-l rounded-full w-full" id="newRecipeDescriptionInput" type="text" placeholder="An interesting description"/>
            <input class="border b-2 p-2 text-l rounded-full" id="userIdInput" type="text" placeholder="Your name..."/>
            
            <!--cook times-->
            <div>
                <input class="border b-2 p-1 text-1 rounded-full" id="prepTimeInput" type="text" placeholder="Prep time..."/>
                <input class="border b-2 p-1 text-1 rounded-full" id="cookTimeInput" type="text" placeholder="Cook Time..."/>
            </div>

            <!--tags-->
            <div class="flex flex-row gap-3">
                <div class="flex flex-row gap-1">
                    <label for="seaasonInput">Seasons:</label>
                    <select class="border b-2 p-1 text-1 rounded-full" id="seasonSelect" name="seasonSelect">
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
                    <select class="border b-2 p-1 text-1 rounded-full" id="timeofMealSelect" name="timeofMealSelect">
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
                    <select class="border b-2 p-1 text-1 rounded-full" id="typeofMealSelect" name="typeofMealSelect">
                        <option value="1">Meal</option>
                        <option value="2">Snack</option>
                        <option value="3">Drink</option>
                        <option value="4">Dessert</option>
                        <option value="5">Appetizer</option>
                        <option value="6">Soup</option>
                    </select>
                </div>

                <div class="flex flex-row gap-1">
                    <label for="countryofOriginSelect">Type of Meal:</label>
                    <select class="border b-2 p-1 text-1 rounded-full" id="countryofOriginSelect" name="countryofOriginSelect">
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
        </form>
    </div>
</template>