<template>
  <section class="grid grid-cols-12 gap-6 justify-center mt-28 px-6">
    <MoleculesTagRounded
      v-for="(tag, index) in tags"
      :key="index"
      :url="tag.url"
      :name="tag.name"
      :link="tag.link"
      class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
    />
  </section>
</template>
<script lang='ts' setup>
import { tags } from "@/utils/Tags";
</script>


