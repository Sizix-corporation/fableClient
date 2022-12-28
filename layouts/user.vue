<template>
  <main class="w-full grid grid-cols-10 gap-x-2 mx-0 p-6 h-screen dark:bg-slate-800">
    <aside
      class="h-3/4 w-full rounded-l-2xl bg-slate-100 col-span-2 dark:bg-slate-900 bg-opacity-60 p-4"
    >
     <OrganismsSideBar  />
    </aside>
    <div class="w-full px-2 pt-2 col-span-6 bg-white dark:bg-slate-900 z-20 h-5/6 overflow-y-auto">
      <OrganismsNavBar class="mb-6"/>
       <slot  />
    </div>
    <aside
      class=" h-3/4  w-full rounded-r-2xl bg-slate-100 col-span-2 dark:bg-slate-900 bg-opacity-60 p-4"
    >
      <OrganismsUserBar />
    </aside>
  </main>
</template>

<script>
export default {
  name: "UserAuth",
};
</script>
<style scoped></style>
