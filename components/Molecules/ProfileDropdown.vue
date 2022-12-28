<template>
  <div class="z-20 grid grid-cols-6 items-center gap-x-2 w-full px-2">
    <AtomsImageRounded
      :src="avatar"
      :alt='alt'
      class="h-8 w-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 col-span-2 bg-transparent dark:bg-transparent"
    />

    <div class="col-span-4 text-left top-16 w-full">
      <HeadlessMenu as="div" class="relative inline-block text-left">
        <div>
          <HeadlessMenuButton
            class="inline-flex w-full justify-center items-center gap-x-2 px-4 py-2"
          >
            <AtomsLabel
              :name="User.name.toLowerCase()"
              class="dark:text-white opacity-80"
            />
            <AtomsIconBottom class="w-4 h-4 dark:text-white opacity-80" />
          </HeadlessMenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <HeadlessMenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <HeadlessMenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <span
                    :active="active"
                    class="mr-2 h-5 w-5 text-violet-400"
                    aria-hidden="true"
                  ></span>
                  Mon profil
                </button>
              </HeadlessMenuItem>
            </div>
            <div class="px-1 py-1">
              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  to='/archive'
                  :class="[
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <span
                    :active="active"
                    class="mr-2 h-5 w-5 text-violet-400"
                    aria-hidden="true"
                  ></span>
                  Archives
                </NuxtLink>
              </HeadlessMenuItem>
            </div>
            <div class="px-1 py-1">
              <HeadlessMenuItem v-slot="{ active }">
                <button
                  @click="logout"
                  :class="[
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <span
                    :active="active"
                    class="mr-2 h-5 w-5 text-violet-400"
                    aria-hidden="true"
                  ></span>
                  Deconnexion
                </button>
              </HeadlessMenuItem>
            </div>
          </HeadlessMenuItems>
        </transition>
      </HeadlessMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { user } from "@/stores/user";
import UiAvatar from "@/utils/UiAvatar";
const User: any = inject("User"); // get by provide to dashboard

const logout = async () => {
  const initUser = user();
  initUser.logout();
  const runtime = useRuntimeConfig();
  await callApi(`${runtime.public.apiBase}/logout`, {
    method: "POST",
    credentials: "include",
  }).then((res) => {
    navigateTo("/");
  });
};
const avatar: string = UiAvatar(User.name);
const alt:string ='La photo de profile de '+ User.name

</script>
