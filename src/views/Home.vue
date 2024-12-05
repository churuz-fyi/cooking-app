<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MiniRecipe from '../components/MiniRecipe.vue';
import MiniCookbook from '../components/MiniCookbook.vue';

// Reactive state variables
const cards = ref([]);
const cookbooks = ref([]);
const limit = 20;
const cookbook_limit = 6;
const offset = ref(0);
const cookbook_offset = ref(0);
const searchQuery = ref("");
const loading = ref(false);
const allLoaded = ref(false);

// Fetch cards from API
const fetchCards = async () => {
    if (loading.value || searchQuery.value) return;
    loading.value = true;

    try {
        const response = await axios.get('http://127.0.0.1:5000/get_cards', {
            params: { limit, offset: offset.value },
        });
        if (response.data.length > 0) {
          cards.value.push(...response.data);
          offset.value += limit; // Increment offset for next batch
        } else {
          allLoaded.value = true;
        }
    } catch (error) {
        console.error('Error fetching cards:', error);
    } finally {
      loading.value = false;
    }
};
const fetchCookbooks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/get_cookbooks', {
      params: { cookbook_limit, offset: cookbook_offset.value },
    });
    cookbooks.value.push(...response.data);
    cookbook_offset.value += cookbook_limit;
  } catch (error) {
    console.error('Error fetching cookbooks:', error);
  }
};

const handleSearch = async () => {
  if (!searchQuery.value.trim()) {
    cards.value = [];
    offset.value = 0;
    allLoaded.value = false;
    await fetchCards();
    return;
  }

  loading.value = true;

  try {
    const response = await axios.get('http://127.0.0.1:5000/get_cards_search', {
      params: {search_value: searchQuery.value, offset: 0, limit: limit},
    });
    cards.value = response.data;
    allLoaded.value = response.data.length < limit;
  } catch (error) {
    console.error("Error searching cards:", error);
  } finally {
    loading.value = false;
  }
};

// Load more cards on button click
const loadMoreCards = () => {
    fetchCards();
};

const loadMoreCookbooks = () => {
    fetchCookbooks();
}

// Fetch initial cards when the component is mounted
onMounted(() => {
    fetchCards();
    console.log('Cards:', cards.value); // Debugging: Log cards array
    fetchCookbooks();
    console.log('Cookbooks:', cookbooks.value);
});
</script>

<template>
    <div class="flex flex-row gap-2 m-2">
      <input 
        v-model="searchQuery"
        placeholder="Recipe Title or Username..."
        type="text"
        @input="handleSearch"
        class="rounded-full p-2 w-full"
      />
      <button @click="handleSearch" class="p-2 flex flex-row border-2 border-black rounded-full">
        <img class="h-6" src="../assets/icons8-search.svg" alt="search icon"/>
        <p>Search</p>
      </button>
    </div>
    <div class="px-10">
        <h1 class="font-bold text-xl">Cookbooks</h1>
        <div class="cards-grid">
          <MiniCookbook
            v-for="cookbook in cookbooks"
            :key="cookbook.id"
            :cookbook="cookbook"
          />
        </div>
        <button @click="loadMoreCookbooks" class="load-more">Load More</button>
    </div>
    <div class="px-10">
        <h1 class="font-bold text-xl">Recipes</h1>
        <div class="cards-grid">
            <MiniRecipe
              v-for="card in cards"
              :key="card.id"
              :recipe="card"
            />
        </div>
        <button @click="loadMoreCards" class="load-more">Load More</button>
    </div>
</template>

  
  <style scoped>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 0% 1%;
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
  