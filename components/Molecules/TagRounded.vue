<template>
  <NuxtLink
    :to="link"
    class="tag w-36 h-36 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:h-52 xl:w-52 relative card"
  >
    <img
      :src="url"
      alt="name"
      class="w-full h-full object-cover rounded-full opacity-90 dark:opacity-80 hover:opacity-100 transition duration-500 ease-in-out"
    />
    <h2 class="absolute text-white w-full text-center font-semibold text-xl">
      {{ name }}
    </h2>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    link: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
};
</script>

<style scoped>
h2 {
  top: 50%;
  transition: top 500ms ease;
}
.tag:hover h2{
  top: 25%;
}
</style>