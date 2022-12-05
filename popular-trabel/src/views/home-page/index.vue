<template>
  <div class="w-full max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex rounded border-2 border-blue-900">
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

      <TabPanels class="mt-2">
        <TabPanel>
          <ui-button label="Search" @click="fetchData"></ui-button>
          <ui-table :headers="state.headers">
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
              <td class="table-data">afdasdf</td>
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
              <td class="table-data">
                {{ item.price }}
              </td>
            </tr>
          </ui-table>
        </TabPanel>
        <TabPanel>this is tab panel2 </TabPanel>
        <TabPanel>this is tab panel3 </TabPanel>
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
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    UiButton,
    UiTable,
  },
  setup() {
    const state = reactive({
      tabs: ["One Way", "Round Trip", "Multi City"],
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
          label: "Route",
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
      console.log("seg", segmented);
      return segmented;
    };

    return { state, fetchData, getItineraries };
  },
};
</script>

<style scoped>
.table-data {
  @apply text-lg font-normal px-[30px] py-3.5;
}
</style>
