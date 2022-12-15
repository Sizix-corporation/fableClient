<template>
  <nav
    class="flex justify-around gap-x-2 w-full m-0 md:p-4 text-slate-900 dark:text-white"
  >
    <div class="flex flex-row items-center gap-x-4 justify-start lg:w-full">
      <NuxtLink
        to="/"
        class="font-bold text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl"
        >Fable</NuxtLink
      >
      <SwitchMode />
    </div>
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
    <div
      v-if="!guest()"
      class="flex flex-row items-center gap-x-4 justify-center w-full"
    >
      <NuxtLink
        to="/inscription"
        class="text-base md:text-base lg:text-lg font-semibold hover:opacity-80 transition duration-500"
        >M'inscrire</NuxtLink
      >
      <BtnRounded href="/connexion" name="Me connecter" class="" />
    </div>
    <div
      v-else
      class="flex flex-row items-center gap-x-4 justify-center w-full"
    >
      <BtnRounded href="/dashboard" name="Mon compte" class="" />
    </div>
  </nav>
</template>
<script lang="ts" setup>
import guest from '@/composables/guard/guest'
import type { Ref } from "nuxt/dist/app/compat/capi";
const links: Ref<Object[]> = ref([
  { to: "/", name: "Histoire" },
  { to: "/", name: "Livre" },
  { to: "/", name: "Genre" },
  { to: "/", name: "Les plus aimés" },
]);
</script>
<style scoped>
h1 {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
