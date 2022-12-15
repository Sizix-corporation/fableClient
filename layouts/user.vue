<template>
  <main class="w-full grid grid-cols-10 gap-x-2 mx-0 p-6">
    <aside
      class="sticky top-0 h-5/6 w-full rounded-l-2xl bg-slate-100 col-span-2 dark:bg-slate-700 bg-opacity-60 p-4"
    >
      <LayoutSideBar />
    </aside>
    <div class="w-full col-span-6 bg-white dark:bg-slate-900 z-20">
      <LayoutNavBar />
      <slot />
    </div>
    <aside
      class="sticky top-0 h-5/6 w-full rounded-r-2xl col-span-2 bg-slate-100 dark:bg-slate-700 bg-opacity-60 p-4"
    >
      <LayoutSideBar class="" />
    </aside>
  </main>
</template>

<script>
export default {
  name: "UserAuth",
};
</script>
<style scoped></style>
