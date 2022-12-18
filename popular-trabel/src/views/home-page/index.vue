<template>
  <div class="w-full px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex max-w-md mx-auto rounded border-2 border-blue-900">
        <Tab
          v-for="(item, key) in state.tabs"
          as="template"
          :key="key"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full border-r-2 border-blue-900 last:border-none py-2.5 text-sm font-medium leading-5 text-blue-700',
              '',
              selected ? 'bg-blue-900 text-white outline-none' : '',
            ]"
          >
            {{ item }}
          </button>
        </Tab>
      </TabList>
      <form class="mt-7 text-end" @submit.prevent="searching">
        <div class="flex space-x-6 justify-center">
          <ui-input
            class="w-40"
            placeholder="FROM"
            v-model="state.formData.from"
          ></ui-input>
          <ui-input
            class="w-40"
            placeholder="TO"
            v-model="state.formData.to"
          ></ui-input>
          <ui-input
            class="w-40"
            placeholder="JOURNEY DATE"
            v-model="state.formData.journey_date"
          ></ui-input>
          <ui-input
            class="w-40"
            placeholder="RETURN DATE"
            v-model="state.formData.return_date"
          ></ui-input>
          <ui-input
            class="w-40"
            placeholder="CLASS"
            v-model="state.formData.class"
          ></ui-input>
        </div>
        <ui-button type="submit" label="Search" @click="fetchData"></ui-button>
      </form>
      <TabPanels class="mt-2">
        <TabPanel>
          <ui-table :headers="state.headers" class="w-full">
            <tr
              v-for="(item, key) in state.data"
              :key="key"
              class="border-b border-gray-300 hover:bg-primary-3/10 transition-all"
            >
              <td class="table-data">
                <span
                  v-for="(segment, key) in getItineraries(item.itineraries[0])"
                  :key="key"
                  class="block"
                  >{{
                    segment?.carrierCode + " " + segment?.flightNumber
                  }}</span
                >
              </td>
              <td class="table-data">
                <span
                  v-for="(segment, key) in getItineraries(item.itineraries[0])"
                  :key="key"
                  class="block"
                >
                  {{ segment?.aircraft }}
                </span>
              </td>
              <td class="table-data">
                <span
                  v-for="(item, index) in item.class[0]"
                  :key="index"
                  class="block"
                  >{{ item }}</span
                >
              </td>
              <td class="table-data">
                <span
                  v-for="(flight, index) in item.fareBasis[0]"
                  :key="index"
                  class="block"
                  >{{ flight }}</span
                >
              </td>
              <td class="table-data">
                <span
                  v-for="(segment, key) in getItineraries(item.itineraries[0])"
                  :key="key"
                  class="block"
                  >{{ segment?.departure?.at }}</span
                >
              </td>
              <td class="table-data">
                <span
                  v-for="(segment, key) in getItineraries(item.itineraries[0])"
                  :key="key"
                  class="block"
                  >{{ segment?.arrival?.at }}</span
                >
              </td>
              <td class="table-data">
                {{ item.itineraries[0]?.duration }}
              </td>
              <td class="table-data text-center">
                {{ item.price }}
                <ui-button class="mt-3" label="Select"></ui-button>
              </td>
            </tr>
          </ui-table>
          <div v-if="!state.data.length">
            <p class="text-center p-6 text-xl">No Data Found!</p>
          </div>
        </TabPanel>
        <TabPanel>
          <p class="text-xl text-center">Page Under Construction</p>
        </TabPanel>
        <TabPanel>
          <p class="text-xl text-center">Page Under Construction</p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { reactive } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import UiButton from "../../../src/components/ui/button/index.vue";
import response from "../../../src/components/data/responseData";
import UiTable from "../../../src/components/ui/table/index.vue";
import UiInput from "../../../src/components/ui/input/index.vue";
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    UiButton,
    UiTable,
    UiInput,
  },
  setup() {
    const state = reactive({
      tabs: ["One Way", "Round Trip", "Multi City"],
      formData: {
        from: "",
        to: "",
        journey_date: "",
        return_date: "",
        class: "",
      },
      headers: [
        {
          label: "Flight",
        },
        {
          label: "Aircraft",
        },
        {
          label: "Class",
        },
        {
          label: "Fare",
        },
        {
          label: "Departure",
        },
        {
          label: "Arrival",
        },
        {
          label: "Duration",
        },
        {
          label: "Price",
        },
      ],
      data: [],
    });

    const searching = () => {
      console.log("formdata", state.formData);
    };

    const fetchData = () => {
      console.log("fetchData", response.flightOffer);
      state.data = response.flightOffer;
    };

    const getItineraries = (item) => {
      // console.log("item", item);
      let segmented = [];
      item?.segments.map((segment) => {
        segmented.push(segment);
      });
      return segmented;
    };

    return { state, fetchData, getItineraries, searching };
  },
};
</script>

<style scoped>
.table-data {
  @apply text-lg font-normal px-[30px] py-3.5;
}
</style>
