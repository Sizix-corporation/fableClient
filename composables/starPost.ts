export default async function starPost(id: number) {
  const runtime = useRuntimeConfig();
  callApi(`${runtime.public.apiBase}/api/starStory/${id}`, {
    method: "POST",
    credentials: "include",
  });
}
