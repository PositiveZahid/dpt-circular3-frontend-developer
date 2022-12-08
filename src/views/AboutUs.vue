<template>
  <div :class="isModalOpen?'bg-gray-600 bg-opacity-60':''">

    <div class="border-t border-b border-gray-400 py-2 px-10 mt-4">
        <div class="w-full text-right">
            <button v-if="tmpArray.length>0" @click="refreshList" class="text-white font-bold px-8 py-2 mr-4 bg-green-500 rounded hover:text-black hover:bg-white border border-green-500 hover:border-gray-400">Refresh List</button>
            <button @click="showModal" class="text-white font-bold px-8 py-2 bg-color rounded hover:text-black hover:bg-white border border-gray-600 hover:border-gray-400">Search</button>
        </div>
    </div>

    <p v-if="tmpArray.length>0" class="text-green-500 px-10 pt-4">Search result showing. Click on <span class="text-red-500">Refresh List</span> button to see all information.</p>
    <table class="flex flex-wrap w-full overflow-x-scroll mt-4 mb-20 px-10">
      <thead :class="isModalOpen?'w-full':'bg-gray-200 w-full'">
          <tr class="flex">
              <td class="py-3 w-full  px-4 text-sm font-bold">FLIGHT</td>
              <td class="py-3 w-full px-4 text-sm font-bold">AIRCRAFT</td>
              <td class="py-3 w-full px-4 text-sm font-bold">CLASS</td>
              <td class="py-3 w-full px-4 text-sm font-bold">FAIR</td>
              <td class="py-3 w-full px-4 text-sm font-bold">ROUTE</td>
              <td class="py-3 w-full  px-4 text-sm font-bold">DEPARTURE</td>
              <td class="py-3 w-full  px-4 text-sm font-bold">ARRIVAL</td>
              <td class="py-3 w-full  px-4 text-sm font-bold">DURATION</td>
              <td class="py-3 w-full  px-4 text-sm font-bold">PRICE</td>
          </tr>
      </thead>
      <tbody class="w-full">
          <tr v-for="(data, index) in flight" :key="index" class="flex border-b-2 border-gray-400 items-center">
              <td class="w-full px-4 text-sm">
                  <p v-for="(item, index) in data.itineraries[0].segments" :key="index" class="my-2">
                      {{ item.marketingCarrier }} {{ item.flightNumber }} 
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">
                  <p v-for="(item, index) in data.itineraries[0].segments" :key="index" class="my-2">
                      {{ item.aircraft }}
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">
                  <p v-for="(item, index) in data.class[0]" :key="index" class="my-2">
                      {{ item }}
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">
                  <p v-for="(item, index) in data.fareBasis[0]" :key="index" class="my-2">
                      {{ item }}
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">
                  <p v-for="(item, index) in data.itineraries[0].segments" :key="index" class="my-2">
                      {{ item.departure.iataCode }} - {{ item.arrival.iataCode }}
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">
                  <p v-for="(item, index) in data.itineraries[0].segments" :key="index" class="my-2">
                      {{ item.departure.at }}
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">
                  <p v-for="(item, index) in data.itineraries[0].segments" :key="index" class="my-2">
                      {{ item.arrival.at }}
                  </p>
              </td>
              <td class="w-full px-4 py-1.5 text-sm">{{ data.itineraries[0].duration }}</td>
              <td class="w-full px-4 py-1.5 text-sm">{{ data.price }}</td>
          </tr>
      </tbody>
    </table>

    <!-- search modal -->
    <div v-show="isModalOpen">
      <div class="fixed top-60 z-50 w-full">
          <div class="relative w-full h-full max-w-2xl mx-auto shadow-2xl md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Search Your Flight
                      </h3>
                      <button @click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6">
                      <label for="flight_number" class="text-lg block">Flight Number</label>
                      <input v-model="flight_number" type="text" name="flight_number" class="p-2 mt-2 rounded border border-gray-300" placeholder="723">
                  </div>
                  <!-- Modal footer -->
                  <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button @click="search" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                      <button @click="closeModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
              </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import jsonData from '../data/data.json'

export default {
  components: {  },
    data(){
      return {
        isModalOpen: false,
        flight: jsonData.flightOffer,
        original_flight_list: jsonData.flightOffer,
        tmpArray: [],

        // input
        flight_number:'',
      }
    },

    methods:{
        showModal(){
          this.flight_number='';
          if(this.isModalOpen){
            this.isModalOpen=false;
          } else {
            this.isModalOpen=true;
          }
        },
        closeModal(){
          this.isModalOpen=false;
        },
        search(){
          this.tmpArray=[];
          for(let i=0; i<this.flight.length; i++){
            for(let j=0; j<this.flight[i].itineraries[0].segments.length; j++){
              if(this.flight_number==this.flight[i].itineraries[0].segments[j].flightNumber){
                this.tmpArray.push(this.flight[i]);
              }
            }
          }
          // data fount by search input. so need to update our list.
          if(this.tmpArray.length>0){
            this.flight = this.tmpArray;
          }
          this.isModalOpen=false;
        },
        refreshList(){
          this.flight = this.original_flight_list;
          this.tmpArray=[];
        },
    },
    computed:{
      
    },
    mounted(){
    }
}
</script>

<style scoped>
</style>
