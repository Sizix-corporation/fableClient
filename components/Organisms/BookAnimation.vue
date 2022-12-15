<template>
  <article class="w-full relative book h-3/4 shadow-xl">
    <div class="absolute top-0 w-full h-full z-30 first-cover rounded-lg">
      <img src="~/assets/img/storyDay.png" alt="" class="w-full h-full" />
    </div>
    <div class="absolute top-0 h-full w-full content bg-slate-100 rounded-lg">
      <blockquote class="overflow-y-auto h-full p-2">
        <h2 class="underline pb-2 text-center">Histoire du jour</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio
        dolor voluptatibus iure corrupti doloremque, eligendi beatae quod
        facilis vero alias deleniti cumque aperiam nostrum tempora. Quod dicta
        amet recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Minima natus sunt assumenda consequuntur necessitatibus dolores
        eum voluptates ut beatae impedit earum, saepe consequatur quae mollitia
        magnam aliquam, voluptatem sapiente quia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum inventore expedita a
        necessitatibus? Eius molestias suscipit nulla, error officiis in rerum
        labore sequi tempore earum numquam praesentium eos quis blanditiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum,
        vitae tempore eos quidem animi laudantium cupiditate tenetur aspernatur.
        Tenetur voluptatum illum libero eum doloribus? Facilis odit unde ducimus
        tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        delectus expedita tempora aut eligendi perferendis repellat perspiciatis
        laboriosam hic optio ex et exercitationem eos esse nesciunt, ea,
        excepturi officiis quibusdam!
      </blockquote>
    </div>
    <div
      class="absolute top-0 h-full w-full z-30 last-cover bg-slate-100 rounded-lg"
    >
      <div
        class="p-4 content-last-cover text-slate-900 flex flex-col gap-y-6 h-full"
      >
        <h3 class="text-center text-md sm:text-md lg:text-xl">
          La peine de mon coeur
        </h3>
        <p>
          écrit par :
          <strong class="uppercase text-sm underline font-normal">
            Eric françois</strong
          >
        </p>
        <p>
          Publié :
          <strong class="uppercase text-sm font-normal">il y à 5 mois</strong>
        </p>
        <p>
          Genre:
          <strong class="uppercase text-sm underline font-normal"
            >Amour
          </strong>
        </p>
        <i class="text-center">Resumé</i>
        <blockquote class="mt-2 overflow-y-auto h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio
          dolor voluptatibus iure corrupti doloremque, eligendi beatae quod
          facilis vero alias deleniti cumque aperiam nostrum tempora. Quod dicta
          amet recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Minima natus sunt assumenda consequuntur necessitatibus dolores
          eum voluptates ut beatae impedit earum, saepe consequatur quae
          mollitia magnam aliquam, voluptatem sapiente quia.
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { tags } from "@/utils/Tags";
</script>

<style scoped>
@media screen and (min-width: 768px) {
  * {
    font-family: "Nerko One", cursive;
  }
}

.first-cover {
  border-left: 6px solid rgb(49 46 129);
  transition: all 700ms ease;
  width: 100%;
}

.book:hover .first-cover {
  z-index: 10;
  border-left: 0px;
  width: 0%;
}
.last-cover {
  left: 0%;
  width: 0px;
}
.book:hover .last-cover {
  z-index: 10;
  animation-name: OpenBook;
  animation-duration: 700ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 560ms;
}
.book:hover .content-last-cover {
  animation-name: ShowText;
  animation-duration: 700ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 1.25s;
}
.content-last-cover {
  opacity: 0;
}
.book:hover .content {
  border-left: 6px solid rgb(49 46 129);
}

@keyframes OpenBook {
  from {
    left: 0%;
    width: 0px;
  }
  to {
    left: -100%;
    width: 100%;
  }
}
@keyframes ShowText {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
