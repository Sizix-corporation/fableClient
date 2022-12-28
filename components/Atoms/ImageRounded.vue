<template>
  <figure
    class="w-full h-full p-1 rounded-full bg-slate-200 dark:bg-slate-700  "
  >
    <img
      :src="src"
      :alt="alt"
      class="rounded-full  object-cover "
    />
  </figure>
</template>

<script lang='ts'>
  export default {

    props:{
      src:{type:String,required:true},
      alt:{type:String,required:true},

    }
  }
</script>
