import React from 'react'
import { useHistory } from 'react-router'

const IndividualInbox:React.FC<any> = ({room,roomId}) => {
    const history=useHistory()

    const handelClick=()=>{
        history.push(`/chat/${room._id}`)
    }
    return (
       
        <li 
        onClick={handelClick}
        className={(roomId==room._id)? "clearfix selected":"clearfix"}
         key={room._id}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
        <div className="about">
          <div className="name">{room.name}</div>
          <div className="status">
            <i className="fa fa-circle online"></i> online
           
          </div>
          {room.expire_at}
        </div>
        
      </li>
    )
}

export default IndividualInbox
