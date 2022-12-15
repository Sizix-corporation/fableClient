import {user} from '@/stores/user'
export default defineNuxtRouteMiddleware((to,from)=>{
   const initUser=user();
   if (initUser.$state.auth) {
    return navigateTo('/dashboard');
 }
})