import {io} from "socket.io-client"
import {URL} from "./urlActual"
let socket;
function SocketConnection(extendedurl:string){
    socket=io(URL+extendedurl, {
        transports: ['websocket','polling'],
        forceNew: true
    })
    // console.log(socket)
    return socket;
    
}
export default SocketConnection