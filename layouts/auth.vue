<template>
  <main class="bg-white dark:bg-slate-900 w-full h-full pb-24 relative">
    <OrganismsNavLanding class="hidden md:flex sm:mb-20 lg:mb-28" />
    <section
      class="mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl bg-white dark:bg-slate-900 dark:bg-opacity-80 rounded-lg py-4 grid grid-cols-10 drop-shadow-lg"
    >
      <div class="col-span-full lg:col-span-7 w-full py-4 px-4">
        <div
          class="flex flex-col gap-y-4 sm:flex-row justify-between items-center sm:mb-20 lg:mb-28 2xl:mb-36"
        >
          <h2
            class="font-semibold text-2xl sm:text-md lg:text-lg 2xl:text-xl tracking-wide text-gray-800 dark:text-slate-100 lg:w-full"
          >
            Fable
          </h2>
          <div class="flex w gap-x-2 items-center mb-8 sm:mb-0 lg:w-full">
            <p
              class="text-base sm:text-sm lg:text-md tracking-wide text-gray-800 dark:text-slate-100"
            >
              êtes vous abonné ?
            </p>
            <AtomsBadge name="Newsletter" url="/" />
          </div>
        </div>
        <div class="sm:pl-8 lg:pl-12 relative">
          <slot />
        </div>
        <div
          class="sm:pl-8 lg:pl-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 flex justify-between"
        >
          <NuxtLink to="/" class="text-slate-900 dark:text-white"
            >@ fable 2022</NuxtLink
          >
          <NuxtLink
            :to="{ name: 'terms' }"
            class="text-slate-900 dark:text-white underline"
            >Règle de confidentialité</NuxtLink
          >
        </div>
      </div>
      <div class="hidden lg:block lg:col-span-3 w-full py-4 px-2">
        <OrganismsBookAnimation />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style scoped>
h2,
h1,
p,
label {
  font-family: "Nunito", sans-serif;
}
</style>
