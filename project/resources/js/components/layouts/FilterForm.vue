<script setup>
const emit = defineEmits(['search'])

</script>

<template>
    <div>
        <div class="tabs">
            <div class="tabs__item">Round Trip</div>
            <div class="tabs__item tabs__item--active">One Way</div>
            <div class="tabs__item">Muilti city</div>
        </div>
        <form class="mt-5" @submit.prevent="$emit('search')">
            <div class="border-b border-t border-indigo-800 py-3">
                <div class="flex gap-3 items-center">
                    <input class="border border-gray-600 p-2 w-[15%]" name="from" type="text">
                    <input class="border border-gray-600 p-2 w-[15%]" name="to" type="text">
                    <input class="border border-gray-600 p-2 w-[15%]" name="to" type="date">
                    <select class="border border-gray-600 p-2 w-[10%]" name="day">
                        <option value="day-">Day-</option>
                    </select>
                    <select class="border border-gray-600 p-2 w-[10%]" name="day">
                        <option value="day+">Day+</option>
                    </select>
                    <select class="border border-gray-600 p-2 w-[20%]" name="day">
                        <option value="any-time">Any time</option>
                    </select>
                    <span class=" text-3xl text-center w-[3%]">+</span>
                    <select class="border border-gray-600 p-2 w-[10%]" name="day">
                        <option value="adt">ADT</option>
                    </select>
                    <select class="border border-gray-600 p-2 w-[10%]" name="day">
                        <option value="1">1</option>
                    </select>
                    <span class=" text-3xl text-center w-[3%]">+</span>
                </div>
            </div>
            <div class="border-b border-indigo-800 py-3 flex justify-between">
                <div class="flex gap-3 items-center">
                    <input type="checkbox" name="extra_options">
                    <label class="font-bold">Extra option</label>
                </div>
                <div class="flex gap-3 items-center">
                    <span class="font-bold">Environment</span>
                    <div class="flex gap-3 items-center">
                        <input type="radio" name="environment">
                        <label class="font-bold">PDT</label>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="radio" name="environment">
                        <label class="font-bold">Dummy</label>
                    </div>
                </div>
                <button class="px-5 rounded-md uppercase text-sm py-2 bg-indigo-800 text-white"
                    type="submit">Search</button>
            </div>
        </form>
    </div>
</template>

<style>
.tabs {
    @apply flex justify-center items-center;
}

.tabs__item {
    @apply px-5 py-1 border hover:bg-indigo-800 hover:text-white cursor-pointer border-indigo-800 text-indigo-800 text-sm;
}

.tabs__item--active {
    @apply bg-indigo-800 text-white;
}
</style>