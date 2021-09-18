import { notiInterface } from "./notificationInterface";
export interface searchInterface{
    loading:boolean,
    users:notiInterface[],
    error:"",
    open:boolean,
    search:string
}