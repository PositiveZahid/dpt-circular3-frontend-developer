<template>
    <FormSection @formSubmitted="fetchData" />
    <TableSection :flightOffers="flightOffers" />
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const flightOffers = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('/data.json');
    flightOffers.value = response.data.flightOffer;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
</script>