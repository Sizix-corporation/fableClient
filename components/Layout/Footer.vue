<template>
  <footer class="bg-transparent flex flex-row justify-around gap-4 text-slate-900 dark:text-white">
    <ul class="flex flex-col gap-y-2">

        <li class="list-none font-semibold underline underline-offset-4 text-sm md:text-md lg:text-lg 2xl:text-xl">Histoire</li>
        <li v-for="(tag, index) in tags" :key="index"  class="list-none   text-base md:text-sm lg:text-md 2xl:text-lg"><NuxtLink :to='tag.link' class="w-full">{{tag.name}}</NuxtLink></li>
    </ul>
    <ul class="flex flex-col gap-y-2">
        <li class="list-none font-semibold underline underline-offset-4 text-sm md:text-md lg:text-lg 2xl:text-xl">Livre</li>
        <li v-for="(tag, index) in tags" :key="index"  class="list-none   text-base md:text-sm lg:text-md 2xl:text-lg"><NuxtLink :to='tag.link' class="w-full">{{tag.name}}</NuxtLink></li>
    </ul>
   <ul class="flex flex-col gap-y-2">

        <li class="list-none font-semibold underline underline-offset-4 text-sm md:text-md lg:text-lg 2xl:text-xl">Fable</li>
        <li   class="list-none   text-base md:text-sm lg:text-md 2xl:text-lg"><NuxtLink :to="{name:'terms'}" class="w-full">Politique </NuxtLink></li>
    </ul>
  </footer>
</template>

<script lang='ts' setup>
import {tags} from '@/utils/Tags'
</script>

<style>

</style>