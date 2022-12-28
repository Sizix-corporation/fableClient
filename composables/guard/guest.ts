/*
 *rule : permissions to login
 */
import { user } from "@/stores/user";
import type {Ref} from 'vue'
const initUser = user();
export default function() {
   const fun= ():boolean =>{
    const res:Ref<boolean>= ref(initUser.$state.auth)
    return res.value
  }
  
  return fun();
};
