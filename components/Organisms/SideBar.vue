<template>
  <div class="w-full mx-auto  h-full">
    <div class="flex items-center gap-2 w-full">
      <h2 class="text-slate-700 dark:text-white font-semibold">Fable</h2>
      <AtomsInput
        class="bg-slate-300 dark:bg-slate-700 border-0 w-full "
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
        class="text-slate-500 dark:text-white dark:text-opacity-70 font-semibold mb-4 mt-8"
      />
      <li class="w-full" v-for="(link, index) in data.links" :key="index">
        <MoleculesNavIcon :to="link.to" :name="link.name">
          <template #icon>
            <component :is="link.icon"></component>
          </template>
        </MoleculesNavIcon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
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
    to:string
  }[];
}
const datas: Data[] = [
  {
    title: "Actualité",
    links: [
      {
        name: "Les histoires",
        icon: Story,
        to:'/'
      },
      {
        name: "Les livre",
        icon: Book,
        to:'/'
      },
    ],
  },
  {
    title: "Edition",
    links: [
      {
        name: "Écrire une histoire",
        icon: CreateStory,
        to:'/creer-une-histoire'
      },
      {
        name: "Écrire un livre",
        icon: CreateBook,
        to:'/'
      },
      {
        name: "Au brouillon",
        icon: Later,
        to:'/'
      },
    ],
  },
];
</script>
<style scoped>
h2,
span {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
