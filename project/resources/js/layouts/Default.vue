<script setup>
import Navbar from '../components/layouts/Navbar.vue'
import Breadcrumbs from '../components/layouts/Breadcrumbs.vue'

</script>

<template>
    <Navbar></Navbar>
    <Breadcrumbs></Breadcrumbs>
    <div class="container mx-auto max-w-[1300px] w-full">
        <router-view/>
    </div>
</template>