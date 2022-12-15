<template>
  <main class="w-full grid grid-cols-10 gap-x-2 mx-0 p-6">
    <aside
      class="sticky top-0 h-full w-full rounded-l-2xl bg-slate-100 col-span-2 dark:bg-slate-700 bg-opacity-60 p-4"
    >
      <OrganismsSideBar />
    </aside>
    <div class="w-full col-span-6 bg-white dark:bg-slate-900 z-20">
      <OrganismsNavBar />
      <slot />
    </div>
    <aside
      class="sticky top-0 h-full w-full rounded-r-2xl col-span-2 bg-slate-100 dark:bg-slate-700 bg-opacity-60 p-4"
    >
      <OrganismsSideBar class="" />
    </aside>
  </main>
</template>

<script>
export default {
  name: "UserAuth",
};
</script>
<style scoped></style>
