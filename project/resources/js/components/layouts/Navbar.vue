<script setup>
import avatar from '../../assets/avatar.jpeg'
</script>

<template>
    <nav class="bg-[#1F2937] text-white">
        <div class="container mx-auto flex justify-between items-center max-w-[1300px]">
            <ul class="flex">
                <li><router-link exactActiveClass="text-gray-100" to="/" class="p-5 font-bold text-sm text-gray-400 hover:text-white inline-block">Dashboard</router-link></li>
                <li><router-link exactActiveClass="text-gray-100" to="/master-price" class="p-5 font-bold text-sm text-gray-400 hover:text-white inline-block">Master price</router-link></li>
                <li><router-link exactActiveClass="text-gray-100" to="/custom-price" class="p-5 font-bold text-sm text-gray-400 hover:text-white inline-block">Custom price</router-link></li>
                <li><router-link exactActiveClass="text-gray-100" to="/calender" class="p-5 font-bold text-sm text-gray-400 hover:text-white inline-block">Calender</router-link></li>
                <li><router-link exactActiveClass="text-gray-100" to="/report" class="p-5 font-bold text-sm text-gray-400 hover:text-white inline-block">Report</router-link></li>
            </ul>
            <div class="flex items-center gap-2">
                <button class="text-gray-400 hover:text-white hover:bg-opacity-10 rounded-full flex items-center justify-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </button>
                <button class="rounded-full overflow-hidden w-8 h-8">
                    <img :src="avatar" alt="">
                </button>
            </div>
        </div>
    </nav>
</template>
