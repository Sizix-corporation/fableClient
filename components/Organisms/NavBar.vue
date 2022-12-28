<template>
  <header
    class="flex justify-around w-full rounded-bl-2xl rounded-br-2xl bg-slate-100 col-span-2 dark:bg-slate-800 bg-opacity-60 p-4"
  >
    <MoleculesSwitchMode class="text-yellow-600 " />
    <nav class="flex gap-2 justify-start ">
      <div v-for="(item, index) in data" :key="index">
        <MoleculesLinkIcon :to="item.link">
          <template #icon>
            <div
              class="bg-indigo-700 dark:bg-slate-700 p-1 rounded-lg bg-opacity-40 hover:bg-opacity-30 hover:scale-105 transition duration-500 ease-in-out"
            >
              <component
                :is="item.icon"
                class="text-indigo-600 dark:text-white text-opacity-80"
              ></component>
            </div>
          </template>
        </MoleculesLinkIcon>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Home from "@/components/Atoms/Icon/Home.vue";
import Setting from "@/components/Atoms/Icon/Setting.vue";
import People from "@/components/Atoms/Icon/People.vue";
import Notification from "@/components/Atoms/Icon/Notification.vue";

interface Link {
  link: string;
  icon: unknown;
}
const data: Link[] = [
  {
    link: "/dashboard",
    icon: Home,
  },
  {
    link: "/",
    icon: People,
  },
  {
    link: "/",
    icon: Notification,
  },
  {
    link: "/",
    icon: Setting,
  },
];
</script>

<style></style>
