/*
 *rule : permissions to login
 */
import { user } from "@/stores/user";
export default () => {
  return useState("canlogin", ():boolean => {
    const initUser = user();
    return initUser.$state.auth
  });
};
