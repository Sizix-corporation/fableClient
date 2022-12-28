import {defineStore} from 'pinia';

export const user=defineStore('user',{

    state:()=>{
        return  {
            user:{} as  unknown,
            auth:false as boolean
        }
    },
    actions:{
        setUserInformations(user:unknown):void{
              this.$state.user=user
        },
        login(){
           this.$state.auth=true
        },
        logout(){
            this.$state.auth=false;
            this.$state.user={}
        }
    },
    persist: true,
})


