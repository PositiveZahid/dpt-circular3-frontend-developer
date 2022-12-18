<template lang="">
  <button :type="type" class="bg-blue-900 px-8 py-2 rounded text-white mb-7">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: "ui-button",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    type: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang=""></style>
