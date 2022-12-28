<template>
  <div
    class="flex flex-col gap-y-4 items-center w-full rounded-md shadow-md bg-white dark:bg-slate-800 cursor-pointer p-4"
  >
    <article class="grid grid-cols-8 gap-6">
      <figure
        class="md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20   rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse   col-span-1"
      >
        <img  class="rounded-full object-cover " />
      </figure>
      <div class="col-span-6 space-y-2 w-full">
        <h2
          class="animate-pulse p-3 rounded-lg w-full bg-slate-200 dark:bg-slate-700"
        ></h2>
        <div class="flex gap-x-2 items-center">
          <p
            class="animate-pulse bg-slate-200 dark:bg-slate-700 p-3 rounded-lg w-1/3"
          ></p>
          <AtomsBadge
            url="/"
            name="#Amour"
            class="animate-pulse bg-slate-200 dark:bg-slate-700 p-3 rounded-lg text-opacity-0 hover:text-opacity-0 dark:text-transparent"
          />
        </div>
      </div>
      <span
        class="animate-pulse text-slate-500 dark:text-slate-300 font-semi-bold text-4xl col-span-1"
        >...</span
      >
      <blockquote
        class="animate-pulse bg-slate-200 mb-4 dark:bg-slate-700 p-3 rounded-lg text-slate-200 dark:text-transparent w-full col-start-2 col-end-8"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam
        deleniti rem enim, odit dolor saepe natus non facilis dolorem aliquam ad
        amet sunt itaque eum quaerat error earum! Consectetur?
      </blockquote>
    </article>
  </div>
</template>

<script lang="ts" setup></script>
