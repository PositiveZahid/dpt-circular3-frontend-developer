<script setup>
const props = defineProps(['list'])
</script>
<template>
    <table>
        <thead>
            <tr>
                <th>FLIGHT</th>
                <th>AIRCRAFT</th>
                <th>CLASS</th>
                <th>FARE</th>
                <th>ROUTE</th>
                <th>DEPARTURE</th>
                <th>ARIVAL</th>
                <th>DURATION</th>
                <th>PRICE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in list" :key="`tbody-${index}`">
                <td>
                    <div v-for="(segment, index) in item.itineraries[0].segments"
                        :key="`secment-item-${index}-${segment.flightNumber}`">
                        {{ segment.carrierCode + ' ' + segment.aircraft }}
                    </div>
                </td>
                <td>
                    <div v-for="(segment, index) in item.itineraries[0].segments"
                        :key="`secment-item-${index}-${segment.flightNumber}`">
                        {{ segment.flightNumber }}
                    </div>
                </td>
                <td>
                    <div v-for="(className, index) in item.class[0]" :key="`secment-item-${index}-${className}`">
                        {{ className }}
                    </div>
                </td>
                <td>
                    <div v-for="(fare, index) in item.fareBasis[0]" :key="`secment-item-${index}-${fare}`">
                        {{ fare }}
                    </div>
                </td>
                <td>
                    <div v-for="(route, index) in item.itineraries[0].segments"
                        :key="`secment-item-${index}-${route.arrival.iataCode}-${route.departure.iataCode}`">
                        {{ `${route.arrival.iataCode}-${route.departure.iataCode}` }}
                    </div>
                </td>
                <td>
                    <div v-for="(route, index) in item.itineraries[0].segments"
                        :key="`secment-item-${index}-${route.departure.iataCode}`">
                        {{ route.departure.at }}
                    </div>
                </td>
                <td>
                    <div v-for="(route, index) in item.itineraries[0].segments"
                        :key="`secment-item-${index}-${route.arrival.iataCode}`">
                        {{ route.arrival.at }}
                    </div>
                </td>
                <td>
                    {{ item.itineraries[0].duration }}
                </td>
                <td>
                    <div class="w-full flex justify-end">
                        <div class="flex flex-col items-center">
                            <span>{{ item.price }}</span>
                            <button class=" bg-indigo-800 text-white px-3 py-1 rounded-md">SELECT</button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>

table{
    @apply w-full;
}

thead{}
th{
    @apply p-3 text-left bg-slate-200;
}
th:last-child{
    @apply text-right;
}
tr:nth-child(odd){
    @apply bg-slate-100
}
tr:nth-child(even){
    @apply bg-slate-200
}

td{
    @apply px-3 border-b border-b-red-500;
}
td:last-child{
    @apply text-right justify-end;
}

</style>