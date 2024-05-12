<script setup>
import { ref } from 'vue'
import FilterForm from '../components/layouts/FilterForm.vue'
import Datatable from '../components/Datatable.vue'
import data from '../assets/LHR_CDG_ADT1_TYPE_1.txt'

// state
const message = ref('')
const flightOffer = ref([])

// methods
const submit = () => {
    fetch(data).then(res => res.json()).then(res => {
        message.value = res.message
        flightOffer.value = res.flightOffer
    })
}
</script>

<template>
    <div>
        <FilterForm class="mt-5" @search="submit"></FilterForm>
        <div v-if="message">{{ message }}</div>
        <Datatable class="mt-5" :list="flightOffer" />
    </div>
</template>