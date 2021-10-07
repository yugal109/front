import axios from "../url"
import { Dispatch } from "redux"

export const reactionAction=(token:string,id:string,setLength:any,length:number)=>(dispatch:Dispatch)=>{
    axios.post(`/react/${id}`,{},{
        headers:{
            "x-auth-token":token
        }
    })
    .then((response)=>{
        console.log(response.data)
        if(response.data.status===1){
            setLength(length+1)

        }else{
            setLength(length-1)

        }
    }).catch((error)=>{
        console.log(error)
    })

}


export const reactionListsAction=(token:string,msgId:string)=>(dispatch:Dispatch)=>{
    axios.get(`/react/${msgId}`,{
        headers:{
            "x-auth-token":token
        }
    })
    .then((response)=>{
        dispatch({type:"REACTIONS_LIST_LOADED",payload:response.data})
    }).catch((error)=>{
        console.log(error)
    })
    
}