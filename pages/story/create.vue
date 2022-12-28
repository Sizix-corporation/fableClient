<template>
  <NuxtLayout>
    <form @submit.prevent="submit" class="grid grid-cols-4 gap-x-4">
      <div class="w-full col-span-full sm:col-span-3">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Titre</label
        >
        <AtomsInput
          class="my-4"
          type="text"
          placeholder="Le titre de votre histoire"
          v-model="form.title"
        />
      </div>
      <div class="w-full col-span-full sm:col-span-3">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Tag</label
        >
       <select v-model="form.tag_id"  class="my-4 w-full rounded-lg border-2 border-indigo bg-transparent text-slate-900 dark:text-slate-100 text-opacity-80 dark:border-slate-100 p-2">
           <option class="dark:text-black" v-for="(tag,index) in tags" :key='index' :value="tag.id">{{tag.name}}</option>
       </select>
      </div>
      <div class="w-full col-span-full sm:col-span-3">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Votre hisoire (min : 200 caratères )
        </label>
        <textarea
          v-model="form.content"
          placeholder="écrire ici"
          rows="8"
          class="my-4 w-full rounded-lg border-2 border-indigo bg-transparent text-slate-900 dark:text-slate-100 text-opacity-80 dark:border-slate-100 p-2"
        ></textarea>
      </div>
      <AtomsBtnSubmit name="Publier " :pending="pendingQuery" />
    </form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { user } from "@/stores/user";
import { tags } from "@/utils/Tags";
interface Story {
  title: string;
  content: string;
  tag_id: number;
}
definePageMeta({
  layout: "user",
  alias: "/creer-une-histoire",
  middleware: "auth",
});
const initUser = user();
const User: any = initUser.$state.user;
provide("User", User);

const form: Ref<Story> = ref({
  title: "",
  content: "",
  tag_id: 1,
});
let pendingQuery: Ref<boolean> = ref(false);
const runtime = useRuntimeConfig();
const submit = async () => {
  pendingQuery.value = true;
  await callApi(`${runtime.public.apiBase}/api/story`, {
    body: JSON.stringify(form.value),
    credentials: "include",
    method: "POST",
  }).then((res) => {
    pendingQuery.value = res.pending.value;
    if (res.error.value?.status == undefined) {
      alertSuccess("Vous avez ajouté une nouvelle histoire ");
    }
  });
};
</script>
