import { validationError } from "@/stores/validationError";
import type { Ref } from "vue";
import Swal from "sweetalert2";
export default function () {
  return useState("alertError", () => {
    const initError = validationError();
    const errors = computed(() => {
      return initError.$state.all;
    });
    let template: Ref<any> = ref("");
    const convertError = Object.entries(errors?.value?.errors);
    convertError.forEach((element) => {
      template.value += `<li class='text-left '>${element[1][0]}</li>`;
    });
    Swal.fire({
      icon: "error",
      title: "Oups ",
      text: "Something went wrong!",
      html: `<ul>${template.value}</ul>`,
      showConfirmButton: false,
      showDenyButton: true,
      denyButtonText: "Réessayez",
      denyButtonColor: "red",
      focusCancel: false,
    });
    
  });
}
