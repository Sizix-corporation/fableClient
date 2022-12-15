<template>
   <span class="list-none font-semibold text-sm md:text-md lg:text-lg 2xl:text-xl">{{name}}</span>
</template>

<script>
export default {
  name:'ElementLabel',
  props:{
    name:{type:String,required:true},
  }
}
</script>
