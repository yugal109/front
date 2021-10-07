// import { send } from "process"
export const publicVapidKey="BLD527Cfk9eixkOLj0h56LsWBG4iu-XDtPzunyZVlFmhnp6PmuBGmvh7xfEiOP1amBDHY1vEf0wIUiUhFtoPuxY"

const send=async ()=>{
    console.log("Registering.......")
    const register=await navigator.serviceWorker.register("/worker.js")


}


if("serviceWorker" in navigator){
    send().catch((error)=>{
        console.log(error)
    })
   
}
