import {defineStore} from 'pinia'

export const validationError=defineStore('validationError',{
    state:()=>{
        return {
            all:{} as Error,
            status:200 as number  // default 200
        }
    },
    actions:{
        setError(error:Error){
           this.$state.all=error
        },
        updateStatus(status:number){
            this.$state.status=status
        }
    }
})

interface Error {
    message:string
    errors:object
}