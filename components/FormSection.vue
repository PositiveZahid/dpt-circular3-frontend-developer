<template>
    <form @submit.prevent="handleSubmit">
        <div class="w-11/12 md:w-10/12 mx-auto">
            <h2 class="md:flex hidden items-center text-2xl font-bold text-gray-800">
                Master Price
            </h2>
        </div>
        <div class="mb-5 text-black">
            <hr>
        </div>
        <!-- Redio Button Group Is here -->
        <div class="flex justify-center mb-5">
            <div class="inline-flex rounded-md shadow-sm" role="group">
                <div>
                    <input type="radio" id="profile" name="tab" value="profile" class="hidden peer" />
                    <label for="profile"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 focus:z-10 focus:ring-2 peer-checked:bg-[#312E81] peer-checked:text-white peer-checked:border-[#312E81]">Round Trip</label>
                </div>

                <div>
                    <input type="radio" id="settings" name="tab" value="settings" class="hidden peer" checked />
                    <label for="settings"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 cursor-pointer hover:text-gray-600 hover:bg-gray-100 focus:z-10 focus:ring-2 peer-checked:bg-[#312E81] peer-checked:text-white peer-checked:border-[#312E81]">One Way</label>
                </div>

                <div>
                    <input type="radio" id="messages" name="tab" value="messages" class="hidden peer" />
                    <label for="messages"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 focus:z-10 focus:ring-2 peer-checked:bg-[#312E81] peer-checked:text-white peer-checked:border-[#312E81]">Multi City</label>
                </div>
            </div>
        </div>
        <!-- Input fields are here -->
        <div
            class="w-11/12 md:w-10/12 mx-auto border border-x-0 py-3 border-[#312E81] flex flex-col md:flex-row items-center justify-between">
            <div class="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
                <input class="p-1 border shadow-sm md:w-[150px]" type="text" id="" placeholder="LHR" />
                <input class="p-1 border shadow-sm md:w-[150px]" type="text" id="" placeholder="CDG" />
                <input class="p-1 border shadow-sm md:w-[150px]" type="date" id="" />
            </div>
            <div class="flex flex-col md:flex-row gap-5 -ml-2">
                <select class="p-1 border shadow-sm w-[100px]">
                    <option>Day - </option>
                </select>
                <select class="p-1 border shadow-sm w-[100px]">
                    <option>Day + </option>
                </select>
                <select class="p-1 border shadow-sm w-[180px]">
                    <option>Any time</option>
                </select>
            </div>
            <div class="flex items-center mt-5 md:mt-0">
                <span>+</span>
                <div class="flex gap-5 mx-2">
                    <select class="p-1 border shadow-sm w-[100px]">
                        <option>ADT </option>
                    </select>
                    <select class="p-1 border shadow-sm w-[100px]">
                        <option>1</option>
                    </select>
                </div>
                <span>+</span>
            </div>
        </div>
        <!-- Other fields and Search Button are here -->
        <div
            class="w-11/12 md:w-10/12 mx-auto border border-b border-x-0 border-t-0 border-[#312E81] py-4 md:flex items-center justify-between">
            <div class="font-semibold flex items-center gap-2">
                <input type="checkbox" /> Extra Options
            </div>
            <div class="flex gap-2 font-semibold items-center">
                <input type="radio" name="radio" value="Environment" /> Environment
                <input type="radio" name="radio" value="Dummy" /> Dummy
                <input type="radio" name="radio" value="PDT" /> PDT
            </div>
            <div class="flex justify-center md:block mt-2 md:mt-0">
                <button type="submit" class="px-5 py-2 text-white bg-[#312E81] rounded">SEARCH</button>
            </div>
        </div>
    </form>
</template>

<script setup>
const emit = defineEmits(['formSubmitted']);
const handleSubmit = () => {
    emit('formSubmitted');
};
</script>

<style lang="scss" scoped></style>