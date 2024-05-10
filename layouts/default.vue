<template>
    <div>
        <!-- Navigation Bar is here -->
        <NavBar/>
        <slot />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>