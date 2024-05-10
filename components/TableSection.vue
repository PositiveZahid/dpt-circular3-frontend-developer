<template>
    <div v-if="flightOffers.length > 0" class="relative overflow-x-auto shadow-md rounded w-11/12 md:w-10/12 mx-auto mt-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <!-- Table Heading is here -->
            <thead class="text-xs text-gray-700 uppercase bg-[#E5E7EB]">
                <tr>
                    <th scope="col" class="px-6 py-3">Flight</th>
                    <th scope="col" class="px-6 py-3">Aircraft</th>
                    <th scope="col" class="px-6 py-3">Class</th>
                    <th scope="col" class="px-6 py-3">Fare</th>
                    <th scope="col" class="px-6 py-3">Route</th>
                    <th scope="col" class="px-6 py-3">Departure</th>
                    <th scope="col" class="px-6 py-3">Arrival</th>
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3">Duration</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                </tr>
            </thead>
            <!-- Table body is here -->
            <tbody>
                <tr v-for="(offer, index) in flightOffers" :key="index"
                    class="relative odd:bg-[#F3F4F6] odd:border-b-[#F57F7F] even:bg-[#E5E7EB] even:border-b-[#F57F7F] border-y">
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(segment, sIndex) in offer?.itineraries[0].segments">
                            <p>{{ segment.carrierCode }} {{ segment.aircraft }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(segment, sIndex) in offer?.itineraries[0].segments">
                            <p>{{ segment.flightNumber }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(cls, sIndex) in offer?.class[0]">
                            <p>{{ cls }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(fb, sIndex) in offer?.fareBasis[0]">
                            <p>{{ fb }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(segment, sIndex) in offer?.itineraries[0].segments">
                            <p>{{ segment.departure.iataCode }} - {{ segment.arrival.iataCode }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(departureAt, sIndex) in offer?.itineraries[0].segments">
                            <p>{{ departureAt.departure.at }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(arrivalAt, sIndex) in offer?.itineraries[0].segments">
                            <p>{{ arrivalAt.arrival.at }}</p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <template v-for="(segment, sIndex) in offer?.itineraries[0].segments">
                            <p>
                                ----
                            </p>
                        </template>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ offer?.itineraries[0].duration }}
                    </td>
                    <!-- Select Button is here -->
                    <td class="flex h-full">
                        <div class="">
                            <p class="text-center">{{ offer?.price }}</p>
                            <div class="flex justify-center">
                                <button class="px-5 py-2 text-white bg-[#312E81] rounded"
                                    @click="selectOffer(index)">Select</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
// Gatting props from parent component
const { flightOffers } = defineProps(["flightOffers"]);

// Select Offer function is here
const selectOffer = (index) => {
    console.log('Selected offer:', flightOffers[index]);
};

</script>

<style lang="scss" scoped></style>