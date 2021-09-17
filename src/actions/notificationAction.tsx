import axios from "../url"

export const notificationAction=(token:string)=>(dispatch:any)=>{
    dispatch({type:"NOTIFICATION_LOAD_START"})

    axios.get("/requests",{
        headers:{
            'x-auth-token':token
        }
    })
    .then((response)=>{
        console.log(response.data)
        dispatch({type:"NOTIFICATION_LOADED",payload:response.data})
    })
    .catch((error)=>{
        console.log(error)
    })

}
