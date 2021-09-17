import React from "react";
// import "../css/chat.less"
import InboxList from "../components/InboxList";
import Chat from "../components/Chat";
import "../css/chat.scss";

const ChatScreen:React.FC<any> = ({match}) => {

  return (
    <div>
      <div className="cont clearfix">
        <InboxList  roomId={match.params.id} />
     
    {
      match.params.id !== "undefined" &&
      <Chat roomId={match.params.id} />
      
    }
        
      </div>
    </div>
  );
};

export default ChatScreen;
