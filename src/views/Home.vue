<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MiniRecipe from '../components/MiniRecipe.vue';

// Reactive state variables
const cards = ref([]);
const limit = 10;
const offset = ref(0);

// Fetch cards from API
const fetchCards = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/get_cards', {
            params: { limit, offset: offset.value },
        });
        cards.value.push(...response.data);
        offset.value += limit; // Increment offset for next batch
    } catch (error) {
        console.error('Error fetching cards:', error);
    }
};

// Load more cards on button click
const loadMore = () => {
    fetchCards();
};

// Fetch initial cards when the component is mounted
onMounted(() => {
    fetchCards();
});
</script>

<template>
    <div>
        <div class="flex flex-row">
          <input class="m-2 p-2 rounded-full" placeholder="Search..." type="text"/>
          <button><img src="../assets/icons8-search.svg" alt="search button"/></button>
        </div>
        <div class="cards-grid">
            <MiniRecipe
              v-for="card in cards"
              :key="card.id"
              :title="card.title"
              :userId="card.userId"
              :timetoeat="card.timetoeat"
              :mealType="card.mealType"
              :season="card.season"
              :prepTime="card.prepTime"
              :cookTime="card.cookTime"
            />
        </div>
        <button @click="loadMore" class="load-more">Load More</button>
    </div>
</template>

  
  <style scoped>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .load-more {
    margin-top: 16px;
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .load-more:hover {
    background-color: #0056b3;
  }
  </style>
  