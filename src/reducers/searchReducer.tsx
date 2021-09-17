import { searchInterface } from "../interfaces/searchInterface"
export const searchReducer=(state:searchInterface={loading:false,users:[],error:""},action:any)=>{
    switch(action.type){
        case 'USERS_LIST_LOADING_STARTED':
            return {...state,loading:true}
        default:
            return {...state}
    }
}