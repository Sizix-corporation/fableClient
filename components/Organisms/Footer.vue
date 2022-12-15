<template>
  <footer class="bg-transparent flex flex-row justify-around gap-4 text-slate-900 dark:text-white">
   <MoleculesListLabel :datas='tags' />
   <MoleculesListLabel :datas='tags' />
   <span class="flex flex-col gap-y-2">
        <AtomsLabel name='Plus' class='underline underline-offset-4 '/>
        <NuxtLink :to="{name:'terms'}" class="w-full text-base" ><span>Politique</span></NuxtLink>
    </span>
  </footer>
</template>
<script lang='ts' setup>
import {tags} from '@/utils/Tags'
</script>

