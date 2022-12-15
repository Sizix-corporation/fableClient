<template>
  <NuxtLayout>
    <main>
      <p
        class="text-slate-800 dark:text-white text-center font-semibold opacity-95 tracking-wide text-lg sm:text-2xl lg:text-3xl 2xl:text-5xl mb-6"
      >
        Les histoires
      </p>
      <p
        class="text-indigo-800 dark:text-white text-center font-semibold opacity-95 tracking-wide text-lg sm:text-2xl lg:text-3xl 2xl:text-5xl mb-6"
      >
        Passionnantes pour chacun
      </p>
      <h4
        class="text-slate-900 dark:text-white text-center opacity-60 tracking-wide text-base md:text-sm lg:text-md 2xl:text-lg"
      >
        Retrouver les histoires et livres avec fable
      </h4>
      <OrganismsTag />
      <div class="grid grid-cols-10 w-full h-screen mt-10 px-2">
        <OrganismsBookAnimation
          class="z-30 col-start-6 col-end-11 md:col-start-6 md:col-end-11 lg:col-start-5 lg:col-end-8 w-full h-3/4"
        />
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { tags } from "@/utils/Tags";
definePageMeta({
  layout: "landing",
  alias: "/",
});
</script>
<style scoped>
@media screen and (min-width: 768px) {
  p,
  h4 {
    font-family: "Hachi Maru Pop", cursive;
  }
}
p {
  animation-name: ShowX;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 6s;
  animation-delay: 500ms;
}

@keyframes ShowX {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
