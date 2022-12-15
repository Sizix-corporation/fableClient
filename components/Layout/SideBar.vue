<template>
  <div class="w-full mx-auto relative h-full overflow-y-scroll">
    <div class="flex items-center gap-2 w-full">
      <h2 class="text-slate-700 font-semibold">Fable</h2>
      <Input
        class="bg-slate-200 border-0 w-full"
        placeholder="Vous cherchez ? "
      />
    </div>
    <ul class="flex flex-col gap-y-4">
      <span
        class="text-slate-500 font-semibold sm:text-md md:text-lg xl:text-xl mb-4 mt-8"
        >Actualité</span
      >
      <li class="w-full">
        <NavIcon to="/" name="Les histoires">
          <template #icon>
            <IconStory />
          </template>
        </NavIcon>
      </li>
      <li class="w-full">
        <NavIcon to="/" name="Les livres">
          <template #icon>
            <IconBook />
          </template>
        </NavIcon>
      </li>
    </ul>
    <ul class="flex flex-col gap-y-4 mt-4">
      <span
        class="text-slate-500 font-semibold sm:text-md md:text-lg xl:text-xl my-4"
        >Edition</span
      >
      <li class="w-full">
        <NavIcon to="/" name="Écrire une histoire">
          <template #icon>
            <IconCreateStory />
          </template>
        </NavIcon>
      </li>
      <li class="w-full">
        <NavIcon to="/" name="Écrire un livre">
          <template #icon>
            <IconCreateBook />
          </template>
        </NavIcon>
      </li>
    </ul>
    <ul class="flex flex-col gap-y-4 mt-4">
      <span
        class="text-slate-500 font-semibold sm:text-md md:text-lg xl:text-xl my-4"
        >Pour moi</span
      >
      <li class="w-full">
        <NavIcon to="/" name="Mes histoires">
          <template #icon>
            <IconStory />
          </template>
        </NavIcon>
      </li>
      <li class="w-full">
        <NavIcon to="/" name="Mes livres">
          <template #icon>
            <IconBook />
          </template>
        </NavIcon>
      </li>
      <li class="w-full">
        <NavIcon to="/" name="Au brouillon">
          <template #icon>
            <IconLater />
          </template>
        </NavIcon>
      </li>
    </ul>
  
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
h2,
span {
  font-family: "Roboto Condensed", sans-serif;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(182, 182, 182);
}
::-webkit-scrollbar-track {
  background-color: rgb(153, 153, 153);
}
::-webkit-scrollbar {
  background-color: rgb(153, 153, 153);
  width: 8px;

}
</style>
