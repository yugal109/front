import { searchInterface } from "../interfaces/searchInterface"
export const searchReducer=(state:searchInterface={loading:false,search:"",open:false,users:[],error:""},action:any)=>{
    switch(action.type){
        case 'OPEN_SEARCH_MODAL':
            return {...state,open:true}
        case 'CLOSE_SEARCH_MODAL':
            return {...state,open:false}
        case 'USERS_LIST_LOADING_STARTED':
            return {...state,loading:true}
        case 'USERS_LIST_LOADED':
            return {...state,loading:false,users:action.payload}
        case 'SET_SEARCH':
            return {...state,search:action.payload}
        case "RESET_SEARCH":
            return {...state,users:[],search:""}
        default:
            return {...state}
    }
}