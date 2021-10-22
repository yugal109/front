import React,{useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import {io} from "socket.io-client"
import {URL} from "../urlActual"
import { useHistory } from 'react-router'
import SocketConnection from '../SocketConnection'
let socket;
const IndividualInbox:React.FC<any> = ({room,roomId}) => {
    const history=useHistory()

    // useEffect(()=>{
    //   socket=SocketConnection("/")
    // },[URL])

    const handelClick=()=>{
        history.push(`/chat/${room._id}`)
    }
    return (
       
      <div onClick={handelClick} className={room._id ===  roomId ? "msg online active" : "msg online"}>
        {/* <Avatar alt="Y"/> */}
      <img
        className="msg-profile"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
        alt=""
      />
      {/* {JSON.stringify(room)} */}
      <div className="msg-detail">
        <div className="msg-username">{room.name}</div>
        <div className="msg-content">
          <span className="msg-message">{room.lastMessage.message}</span>
          <span className="msg-date">20m</span>
        </div>
      </div>
    </div>
    )
}

export default IndividualInbox
