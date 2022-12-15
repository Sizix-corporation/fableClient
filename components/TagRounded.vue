<template>
  <NuxtLink :to='link' class="w-36 h-36 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:h-52 xl:w-52 relative card">
    <img :src="props.url" alt="name" class="w-full h-full object-cover rounded-full opacity-90 dark:opacity-80 hover:opacity-100 transition duration-500 ease-in-out" />
    <h2 class="absolute top-1/2 text-white w-full text-center font-semibold text-xl">{{name}}</h2>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  url: string
  name:string
  link:string
}

const props= defineProps<Props>();
</script>

<style scoped>
  h2{
     font-family: 'Darker Grotesque', sans-serif;
     opacity: 0;
     transition: opacity 500ms ease-in-out;
  }
  .card:hover h2{
    opacity: 1;
  }
  
</style>
