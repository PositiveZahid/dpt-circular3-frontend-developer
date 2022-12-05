<template lang="">
  <div class="border border-blue-700 px-4 py-2 rounded mb-7">
    <label for="ui_input">{{ label }}</label>
    <input
      id="ui_input"
      class="focus:outline-none w-full"
      type="text"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "ui-input",
  props: {
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
  },
};
</script>
<style lang=""></style>
