import { FetchOptions } from "ohmyfetch";
import { validationError } from "@/stores/validationError";
export default function (url: string, options?: FetchOptions) {
  const createCookieUrl: string =
    "http://localhost:8000/" + "sanctum/csrf-cookie";
  let token: string = useCookie("XSRF-TOKEN").value || ""; // get token csrf

  const callApi = async () => {
    if (token.length <= 0) {
      await useFetch(createCookieUrl, {
        credentials: "include",
      });
      token = useCookie("XSRF-TOKEN").value || "";
    }

    const response = await useFetch(url, {
      headers: {
        "X-XSRF-TOKEN": token,
      },
      credentials: "include",
      ...options,
    });
    return response;
  };
  const res = callApi().then((res) => {
    if (res.error.value?.status === 422) {
      const initError = validationError(); // initialize store
      initError.updateStatus(res.error.value?.status);
      initError.setError(res.error.value?.data);
      alertError(); // use Composable for dispatch all errors
    }
    return res
  });
  return res;
}
