<template lang="">
  <table class="w-full">
    <thead>
      <tr class="border-b border-gray-300">
        <td
          v-for="(item, key) in headers"
          :key="key"
          class="text-lg font-semibold text-primary-3 px-[30px] py-3 cursor-pointer"
        >
          {{ item.label }}
        </td>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>
<script>
export default {
  name: "ui-table",
  props: {
    headers: {
      type: Array,
      required: false,
    },
  },
};
</script>
<style lang=""></style>
