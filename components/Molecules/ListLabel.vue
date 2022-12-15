<template>
      <ul class="flex flex-col gap-y-2">
        <li class="list-none font-semibold underline underline-offset-4 text-sm md:text-md lg:text-lg 2xl:text-xl">Histoire</li>
        <li v-for="(data, index) in datas" :key="index"  class="list-none   text-base md:text-sm lg:text-md 2xl:text-lg"><NuxtLink :to='data.link' class="w-full">{{data.name}}</NuxtLink></li>
    </ul>
</template>

<script lang='ts'>
export default {
     name:'ListLabel',
     props:{
        datas:{type:Array,reuqired:true}
     }
}
</script>

