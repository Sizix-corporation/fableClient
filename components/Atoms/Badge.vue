<template>
  <NuxtLink
    :to='url' class="cursor-pointer bg-indigo-800 dark:text-white text-indigo-800 font-semibold bg-opacity-40 px-4 py-2 rounded-lg hover:bg-opacity-60 hover:text-indigo-900 transition duration-500 ease-in-out"
    >{{name}}</NuxtLink
  >
</template>

<script lang='ts'>

export default {
    props:{
        url:{type:String,required:true},
        name:{type:String,required:true},
    }
}
</script>

<style></style>
