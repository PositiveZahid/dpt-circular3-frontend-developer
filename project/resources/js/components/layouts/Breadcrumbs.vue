<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()


</script>

<template>
    <nav class="bg-white shadow-md">
        <div class="container mx-auto flex justify-between items-center max-w-[1300px]">
            <span class=" font-bold text-3xl" v-for="(breadcrumb, index) in route.meta.breadcumbs" :key="`breadcrumb-item-${index}`">{{ breadcrumb }}</span>
        </div>
    </nav>
</template>
