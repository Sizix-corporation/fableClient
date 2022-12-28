<template>
  <NuxtLayout>
    <div
      id="post"
      class="flex flex-col gap-y-2 h-5/6 overflow-y-scroll"
      ref="el"
    >
      <OrganismsCardPostSkeleton v-if="pendingQuery" />
      <OrganismsCardPostSkeleton v-if="pendingQuery" />
      <OrganismsCardPostSkeleton v-if="pendingQuery" />
      <ClientOnly>
        <OrganismsCardPost
          v-for="(post, index) in DataPost"
          :key="index"
          :id="post.id"
          :title="post.title"
          :content="post.content"
          :tag="post.tagName"
          :username="post.userName"
          :created_at="post.created_at"
          :star_stories_count="post.star_stories_count"
          :isStarStory="post.isStarStory"
          @starStoryEvent="starStoryEvent(post.id)"
        />
      </ClientOnly>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useInfiniteScroll } from "@vueuse/core";
import { user } from "@/stores/user";
import type { Ref } from "vue";
definePageMeta({
  layout: "user",
  alias: "/dashboard",
  middleware: "auth",
  keepalive: true,
});
const initUser = user();
const User: any = initUser.$state.user;
provide("User", User);

const runtime = useRuntimeConfig();
let DataPost: Ref<any> = ref([]);
let Lengthlinks: Ref<number> = ref(0);
let CurrentLinks: Ref<number> = ref(1);
let LinkData: Ref<{ url: string | null; label: string; active: boolean }[]> =
  ref([]);
let pendingQuery: Ref<boolean> = ref(true);
callApi(`${runtime.public.apiBase}/api/story`, {
  method: "GET",
  credentials: "include",
}).then((res) => {
  pendingQuery.value = res.pending.value;
  let getData: any = [];
  getData = res.data.value;
  if (getData.data) {
    DataPost.value = getData.data;
    LinkData.value = getData.links;
    Lengthlinks.value = getData.links.length;
  }
  return res.data.value;
});

// event handlers

function starStoryEvent(id: number) {
  let get_val = DataPost.value.find((items: any) => items.id == id);
  get_val.isStarStory = !get_val.isStarStory;
  get_val.isStarStory
    ? get_val.star_stories_count++
    : get_val.star_stories_count--;
}
// infinie scroll
const el = ref<HTMLElement>();
useInfiniteScroll(
  el,
  async () => {
    CurrentLinks.value++;
    if (CurrentLinks.value !== Lengthlinks.value - 1) {
      const response = await callApi(
        `${LinkData.value[CurrentLinks.value].url}`,
        {
          method: "GET",
          credentials: "include",
        }
      ).then((res) => {
        const geData: any = res.data.value;
        return geData;
      });
      response.data.forEach((item: any) => {
        DataPost.value.push(item);
      });
    }
  },
  { distance: 10 }
);
</script>
<style scoped>
/* ===== Scrollbar CSS ===== */
/* Firefox */
#post {
  scrollbar-width: auto;
  scrollbar-color: #5654a0 #ffffff;
}

/* Chrome, Edge, and Safari */
#post::-webkit-scrollbar {
  width: 10px;
}

#post::-webkit-scrollbar-track {
  background: transparent;
}

#post::-webkit-scrollbar-thumb {
  background-color: #5654a0;
  border-radius: 14px;
}
</style>
