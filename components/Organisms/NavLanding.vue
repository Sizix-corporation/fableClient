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
      <MoleculesSwitchMode />
    </div>
    <MoleculesListNav />
    <ClientOnly>
      <div
        v-if="guest()"
        class="flex flex-row items-center gap-x-4 justify-center w-full"
      >
        <AtomsBtnRounded href="/dashboard" name="Mon compte" />
      </div>
      <div
        v-else
        class="flex flex-row items-center gap-x-4 justify-center w-full"
      >
        <NuxtLink
          to="/inscription"
          class="text-base md:text-base lg:text-lg font-semibold hover:opacity-80 transition duration-500"
          >M'inscrire</NuxtLink
        >

        <AtomsBtnRounded href="/connexion" name="Me connecter" />
      </div>
    </ClientOnly>
  </nav>
</template>
<script lang="ts" setup>
import guest from "@/composables/guard/guest";
</script>
<style scoped>
h1 {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
