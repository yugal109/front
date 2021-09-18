import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import "../css/eachUserList.css";

const IndividualInviteList: React.FC<any> = ({ follower }) => {

  const [invited,setInvited]=useState<boolean>(false)
  const dispatch=useDispatch()
  const handleUsersAddToInvitationList=()=>{
      setInvited(!invited)
      dispatch({type:"ADD_TO_INVITATION_LIST",payload:{userId:follower.userId._id,add:invited}})
  }
  return (
    <div className="each_invite_user">
      {follower.userId.username}

      <div>
        <button onClick={handleUsersAddToInvitationList} className="button_invite">
            {invited ?
                <i className="fa fa-check"></i>
            :
            "Invite"
            
        }
            
            </button>
      
      </div>
    </div>
  );
};

export default IndividualInviteList;
