<template>
  <div class="flex gap-2  items-center w-full rounded-md shadow-lg bg-slate-100  dark:bg-slate-700 hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
    <AtomsImageRounded
      src='https://yatachi-code.org/_nuxt/img/profile.6b08902.webp'
      alt='La photo de profile de poupoin aka laurent sur fable '
      class="h-4 w-4 sm:w-8 sm:h-8 lg:w-10 lg:h-10 col-span-2"
    />
    <div class="flex flex-col gap-y-2">
      <AtomsLabel name="henri" class='text-md text-slate-500 dark:text-slate-300 '/>
      <span class="text-slate-500 dark:text-slate-300  font-semi-bold text-sm"
        >#Amour</span
      >
      <span class='text-xs text-slate-500 dark:text-slate-300 '> 5 heures plus tôt </span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
