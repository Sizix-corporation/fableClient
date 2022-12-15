<template>
  <div class="bg-white dark:bg-slate-900">
    <OrganismsNavLanding class="hidden md:flex sm:mb-20 lg:mb-28" />
    <MoleculesInputSearch class="mb-20" />
    <slot />
    <OrganismsFooter class="mt-24 sm:mt-4" />
  </div>
</template>
<script>
export default {
  name: "LandingLayout",
};
</script>
