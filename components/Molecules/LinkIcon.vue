<template>
  <NuxtLink :to='to' class="link w-full pl-4 py-1 flex gap-x-4 items-center rounded-lg">
    <span class="text-white   icon p-2 rounded-full ">
     <slot name='icon'/>
    </span>
  </NuxtLink>
</template>
<script>
export default {
    props:{
        to:{type:String,required:true},
    }
};
</script>

