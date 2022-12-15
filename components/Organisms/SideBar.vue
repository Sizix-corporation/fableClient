<template>
  <div class="w-full mx-auto relative h-full">
    <div class="flex items-center gap-2 w-full">
      <h2 class="text-slate-700 font-semibold">Fable</h2>
      <Input
        class="bg-slate-200 border-0 w-full"
        placeholder="Vous cherchez ? "
      />
    </div>
    <ul
      class="flex flex-col gap-y-4"
      v-for="(data, index) in datas"
      :key="index"
    >
      <AtomsLabel
        :name="data.title"
        class="text-slate-500 font-semibold mb-4 mt-8"
      />
      <li class="w-full" v-for="(link, index) in data.links" :key="index">
        <MoleculesNavIcon to="/" :name="link.name">
          <template #icon>
            <component :is="link.icon"></component>
          </template>
        </MoleculesNavIcon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import Story from "@/components/Atoms/Icon/Story.vue";
import Book from "@/components/Atoms/Icon/Book.vue";
import CreateBook from "@/components/Atoms/Icon/CreateBook.vue";
import CreateStory from "@/components/Atoms/Icon/CreateStory.vue";
import Later from "@/components/Atoms/Icon/Later.vue";
interface Data {
  title: string;
  links: {
    name: string;
    icon: unknown;
  }[];
}
const datas: Ref<Data[]> = ref([
  {
    title: "Actualité",
    links: [
      {
        name: "Les histoires",
        icon: Story,
      },
      {
        name: "Les livre",
        icon: Book,
      },
    ],
  },
  {
    title: "Edition",
    links: [
      {
        name: "Écrire une histoire",
        icon: CreateStory,
      },
      {
        name: "Écrire un livre",
        icon: CreateBook,
      },
      {
        name: "Au brouillon",
        icon: Later,
      },
    ],
  },
]);
</script>
<style scoped>
h2,
span {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
