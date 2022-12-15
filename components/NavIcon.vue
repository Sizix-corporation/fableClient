<template>
  <NuxtLink :to='to' class="link w-full pl-4 py-1 flex gap-x-4 items-center rounded-lg">
    <span class="text-white   bg-indigo-700 p-2 rounded-full">
     <slot name='icon' />
    </span>
    <span
      class="text-slate-700 font-semibold sm:text-sm md:text-md xl:text-lg "
      >{{name}}</span
    >
  </NuxtLink>
</template>
<script>
export default {
    props:{
        to:{type:String,required:true},
        name:{type:String,required:true},
    }
};
</script>

<style scoped>
.link{
    transition: all 200ms ease;
}
.link:hover{
   background-color: rgb(51 65 85);
}
.link:hover span{
   color:white;
}
</style>
