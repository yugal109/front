import axios from "../url"
export const searchAction=(username:string,token:string)=>(dispatch:any)=>{
dispatch({type:"USERS_LIST_LOADING_STARTED"})
axios.get(`/search?username=${username}`,{
    headers:{
        "x-auth-token":token
    }
})
.then((response)=>{
    dispatch({type:"USERS_LIST_LOADED",payload:response.data})
    
})
.catch((error)=>{
    console.log(error)
})
}