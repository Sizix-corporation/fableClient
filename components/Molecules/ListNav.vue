<template>
  <div
    class="flex flex-row items-center gap-x-8 md:justify-end lg:justify-center w-full"
  >
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="hover:opacity-80 transition duration-500 text-base sm:text-sm lg:text-lg font-semibold"
      >{{ link.name }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "nuxt/dist/app/compat/capi";
type Link={to:string,name:string}
const links: Ref<Link[]> = ref([
  { to: "/", name: "Histoire" },
  { to: "/", name: "Livre" },
  { to: "/", name: "Genre" },
  { to: "/", name: "Les plus aimés" },
]);

</script>
