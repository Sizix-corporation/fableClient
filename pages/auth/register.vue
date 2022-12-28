<template>
  <NuxtLayout>
    <h1
      class="font-semibold text-md text-md lg:text-lg 2xl:text-xl tracking-wide text-gray-800 dark:text-slate-100 w-full mb-6"
    >
      Inscription
    </h1>
    <form @submit.prevent="submit" class="grid grid-cols-4 gap-x-4">
      <div class="w-full col-span-full lg:col-span-2">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Nom</label
        >
        <AtomsInput
          v-model="form.name"
          class="my-4"
          type="text"
          placeholder="Votre nom"
        />
      </div>
      <div class="w-full col-span-full lg:col-span-2">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Prénom</label
        >
        <AtomsInput
          v-model="form.surname"
          class="my-4"
          type="text"
          placeholder="Votre prénom"
        />
      </div>
      <div class="w-full col-span-full lg:col-span-2">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Email</label
        >
        <AtomsInput
          v-model="form.email"
          class="my-4"
          type="email"
          placeholder="Votre adresse email"
        />
      </div>
      <div class="w-full col-span-full lg:col-span-2">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Votre pays</label
        >
        <select
          v-model="form.country"
          class="my-4 w-full rounded-lg border-2 border-indigo bg-transparent text-slate-900 dark:text-slate-100 text-opacity-80 dark:border-slate-100 p-2"
        >
          <option
            class="text-slate-900"
            v-for="(country, index) in countries"
            :key="index"
            :value="country"
          >
            {{ country }}
          </option>
        </select>
      </div>
      <div class="w-full col-span-full lg:col-span-2">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Mot de passe</label
        >
        <AtomsInput
          v-model="form.password"
          class="my-4"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
      <div class="w-full col-span-full lg:col-span-2">
        <label
          class="text-gray-900 dark:text-slate-100 text-sm font-semibold tracking-wide"
          >Confirmer mot de passe</label
        >
        <AtomsInput
          v-model="form.password_confirmation"
          class="my-4"
          type="password"
          placeholder="Confirmer mot de passe"
        />
      </div>
      <AtomsBtnSubmit :pending="pendingQuery" name="M'inscrire maintenant " />
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { countries } from "@/utils/Country";
import type { Ref } from "vue";
definePageMeta({
  layout:"auth",
  alias:"/inscription",
  middleware:'redirect-auth'
})
interface Register {
  name: string;
  surname: string;
  email: string;
  country: string;
  password: string;
  password_confirmation: string;
}
const form: Ref<Register> = ref({
  name: "",
  surname: "",
  email: "",
  country: "",
  password: "",
  password_confirmation: "",
});
const runtime = useRuntimeConfig();

const pendingQuery: Ref<boolean> = ref(false); // observer state query
const submit = async () => {
  pendingQuery.value = true;
  const response = await callApi(`${runtime.public.apiBase}/register`, {
    method: "POST",
    body: JSON.stringify(form.value),
  }).then((res) => {
    pendingQuery.value = res.pending.value;
    if (res.data.value) {
      navigateTo("/connexion")
    }
  });
};
</script>
