<template>
  <div class="w-full mx-auto max-w-md px-2 py-16 sm:px-0">
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
              selected ? 'bg-blue-600 text-white' : '',
            ]"
          >
            {{ item }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel>this is tab panel1 </TabPanel>
        <TabPanel>this is tab panel2 </TabPanel>
        <TabPanel>this is tab panel3 </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { reactive } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
export default {
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel },
  setup() {
    const state = reactive({
      tabs: ["One Way", "Round Trip", "Multi City"],
    });

    return { state };
  },
};
</script>
