<template>
  <div
    class="flex flex-col gap-y-4 items-center w-full rounded-md shadow-md bg-white dark:bg-slate-800 cursor-pointer p-4"
  >
    <article class="grid grid-cols-8 gap-4">
      <AtomsImageRounded
        :src="avatar"
        alt="je suis yatachi code"
        class="w-full h-full col-span-1 bg-transparent dark:bg-transparent"
      />
      <div class="col-span-6 space-y-2 w-full">
        <h2
          class="break-words text-slate-500 dark:text-slate-300 font-bold text-xl"
        >
          {{ title }}
        </h2>
        <div class="flex gap-x-2 items-center">
          <p class="text-xs text-slate-500 dark:text-slate-300">
            {{ formatUserName(username) }}
          </p>
          <AtomsBadge url="/" :name="'#' + tag" />
          <span class="text-xs text-slate-500 dark:text-slate-300"
            >{{ created_at }}
          </span>
        </div>
      </div>
      <span
        class="text-slate-500 dark:text-slate-300 font-semi-bold text-4xl col-span-1"
        >...</span
      >
      <blockquote
        class="text-sm text-slate-600 dark:text-slate-200 opacity-70 w-full col-start-2 col-end-8"
      >
        {{ content.substring(0, 200) }} . . .
      </blockquote>
      <div class="col-span-4 gap-4 flex justify-center w-full">
        <button @click="starStory(id),$emit('starStoryEvent',id)" class="flex justify-start items-center">
          <i class="text-slate-400 dark:text-slate-200 text-sm not-italic">
            {{ star_stories_count }}</i
          >
          <AtomsIconStar class="ml-2" :class="isStarStory?'text-yellow-700':'text-slate-600 dark:text-slate-50 text-opacity-40 dark:text-opacity-40'" />
        </button>
        <span class="flex justify-start items-center">
          <i class="text-slate-400 dark:text-slate-200 text-sm not-italic">
            5</i
          >
          <AtomsIconComment class="ml-2 text-slate-500 dark:text-indigo-700" />
        </span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import UiAvatar from "@/utils/UiAvatar";
export default {
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tag: { type: String, required: true },
    username: { type: String, required: true },
    created_at: { type: String, required: true },
    star_stories_count: { type: Number, required: true },
    isStarStory:{ type: Boolean, required: true }
  },
  inject: ["User"], // get by dashboard
  methods: {
    formatUserName(str: string): string {
      const getUser: any = this.User;
      let responseName: string = "";
      if (getUser["name"] !== undefined) {
        responseName = getUser["name"] === this.username ? "Moi" : str;
      }
      return responseName;
    },
    starStory(id:number) {
       starPost(id)
    },
  },
  computed: {
    avatar(): string {
      return UiAvatar(this.username);
    },
  },
};
</script>
