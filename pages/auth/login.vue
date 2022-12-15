<template>
  <NuxtLayout >
    <h1
      class="font-semibold text-md text-md lg:text-lg 2xl:text-xl tracking-wide text-gray-800 dark:text-slate-100 w-full mb-6"
    >
      Me connecter
    </h1>
    <form @submit.prevent="submit" class="grid grid-cols-4 gap-x-4">
      <div class="w-full col-span-full sm:col-span-3">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Email</label
        >
        <Input
          v-model="form.email"
          class="my-4"
          type="email"
          placeholder="Votre adresse email"
        />
      </div>
      <div class="w-full col-span-full sm:col-span-3">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Mot de passe</label
        >
        <Input
          v-model="form.password"
          class="my-4"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
      <div
        class="w-full col-span-full sm:col-span-3 flex justify-start mb-4 items-center"
      >
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Se souvenir de moi</label
        >
        <Input
          type="checkbox"
          class="ml-4 w-6 h-6 rounded-md accent-indigo-800"
        />
      </div>

      <BtnSubmit :pending="pendingQuery" name="Me connecter " />
      <hr class="col-span-3 my-4" />
      <NuxtLink
        to="/"
        class="text-slate-700 dark:text-white underline col-span-full cursor-pointer"
        >Mot de passe oublié</NuxtLink
      >
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { user } from "@/stores/user";
import type { Ref } from "vue";
import { countries } from "@/utils/Country";
definePageMeta({
  layout:"auth",
  alias:"/connexion",
  middleware:'redirect-auth'
})
interface Form {
  email: string;
  password: string;
}
const form: Ref<Form> = ref({
  email: "poupoinaka03@gmail.com",
  password: "01233378",
});
const runtime = useRuntimeConfig();
const pendingQuery: Ref<boolean> = ref(false); // observer state query
const submit = async () => {
  pendingQuery.value = true;
  const response = await callApi(`${runtime.public.apiBase}/login`, {
    method: "POST",
    body: JSON.stringify(form.value),
  }).then((res) => {
    pendingQuery.value = res.pending.value;
    if (res.data.value) {
      const initUser = user();
      let getUser: unknown = res.data.value;
      initUser.setUserInformations(getUser);
      initUser.login();
      navigateTo("/dashboard");
    }
  });
};
</script>
