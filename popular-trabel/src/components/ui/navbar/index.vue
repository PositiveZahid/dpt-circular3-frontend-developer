<template lang="">
  <div class="bg-gray-600 px-10">
    <div class="w-[1200px] mx-auto flex justify-between items-center">
      <ul class="navbar">
        <li class="nav">Dashboard</li>
        <li class="nav">Master Price</li>
        <li class="nav">Custom Price</li>
        <li class="nav">Calendar</li>
        <li class="nav">Reports</li>
      </ul>
      <div>
        <div class="w-10 h-10 border border-white rounded-full"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  @apply flex space-x-8 text-white py-4;
}
.nav {
  @apply text-lg;
}
</style>
