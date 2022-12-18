<template>
  <ui-navbar></ui-navbar>
  <div class="w-[1200px] mx-auto">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from "../src/views/home-page/index.vue";
import UiNavbar from "../src/components/ui/navbar/index.vue";
export default {
  name: "App",
  components: { HomePage, UiNavbar },
};
</script>

<style></style>
