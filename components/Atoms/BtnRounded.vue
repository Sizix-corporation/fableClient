<template>
  <NuxtLink :to='href' class="bg-indigo-800 py-2 px-4 rounded-full text-white hover:bg-indigo-600 transition duration-500">{{name}}</NuxtLink>
</template>

<script >
export default{
    props:{
        href:{type:String,required:true},
        name:{type:String,required:true},
    }
}

</script>

