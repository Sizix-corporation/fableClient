<template>
  <button
    type="submit"
    class="cursor-pointer w-full col-span-full h-full sm:col-span-2 text-center bg-indigo-900 text-white hover:bg-indigo-700 transition duration-500 ease-in-out p-4 rounded-md"
  >
    <div
      v-if="pending"
      class="flex justify-center gap-x-3 animate-spin h-6"
    >
      <span class="p-1 bg-white rounded-full"></span>
      <span class="p-1 bg-white rounded-full"></span>
    </div>
    <div v-else class="flex justify-center items-center gap-x-2 h-6">
      <span>{{name}}</span>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: "BtnSubmit",
  props: {
    pending: { type: Boolean, required: true },
    name: { type: String, required: true },
  },
};
</script>
