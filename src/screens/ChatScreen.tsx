import React from "react";
// import "../css/chat.less"
import InboxList from "../components/InboxList";
import Chat from "../components/Chat";
import "../css/chat.scss";

const ChatScreen:React.FC<any> = ({match}) => {

  return (
    <div>
      <div className="cont clearfix">
        <InboxList />
     
    {
      match.params.id !== "undefined" &&
      <Chat/>
      
    }
        
      </div>
    </div>
  );
};

export default ChatScreen;
