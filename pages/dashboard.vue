<template>
  <NuxtLayout>
  <div>
    
  </div>
  </NuxtLayout>
</template>
<script  setup>
  definePageMeta({
    layout:'user',
    alias:'/dashboard',
    middleware:'auth',
    keepalive:true
  })

</script>
