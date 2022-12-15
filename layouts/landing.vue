<template>
  <div class="bg-white dark:bg-slate-900">
    <LayoutNavLanding class="hidden md:flex sm:mb-20 lg:mb-28" />
    <InputSearch class="mb-20 " />
    <slot />
  </div>
</template>

<script>
export default {
  name:'LandingLayout'
};
</script>
