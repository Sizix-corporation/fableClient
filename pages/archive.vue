<template>
  <NuxtLayout>
    <div class="h-5/6">
      <div class="grid grid-cols-6 gap-4">
        <AtomsBtnRounded
          name="Mes histoires"
          class="col-span-2 w-full text-center"
        />
        <AtomsBtnRounded
          name="Mes livres"
          class="col-span-2 w-full text-center"
        />
        <button
          class="flex justify-center items-center gap-x-2 w-full col-span-2 bg-transparent dark:text-white text-opacity-70 border-2 dark:border-white rounded-md text-slate-700 border-slate-400 hover:bg-slate-400 hover:bg-opacity-70 dark:hover:bg-white dark:hover:text-gray-700 transition duration-500 ease-int-out"
        >
         <span>Filtrer par </span>  <AtomsIconBottom class="w-4 h-4"/>
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { user } from "@/stores/user";
import type { Ref } from "vue";
definePageMeta({
  layout: "user",
  middleware: "auth",
});
const initUser = user();
const User: any = initUser.$state.user;
provide("User", User);
</script>
