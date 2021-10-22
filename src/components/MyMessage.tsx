import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import ReactionModal from "./ReactionModal";
import "../css/reaction.css";

const MyMessage: React.FC<any> = ({ message, socket }) => {

  const { token, id: userId }: any = useSelector<any>(
    (state) => state.userInfoState
  );
  const [length, setLength] = useState<number>(message.reactions.length);



  const handleReaction = () => {
    socket.emit("likeMessage", { messageId: message._id, userId: userId,room:message.chatRoom });
  };

  return (
    <div className="chat-msg owner">
      <div className="chat-msg-profile">
        <img className="chat-msg-img" src={message.user.image} alt="" />

        <div className="chat-msg-date">
          {new Date(message.createdAt).toDateString()}
        </div>
      </div>
      <div className="chat-msg-content">
        <div onDoubleClick={handleReaction} className="chat-msg-text">
          {message.message}
        </div>
        {length !== 0 && (
          <div style={{ display: "flex" }}>
            <ReactionModal token={token} msgId={message._id} />
            <small>{length}</small>
          </div>
        )}

        <div style={{ marginTop: -5 }}>{/* <span >+</span> */}</div>
      </div>
    </div>
  );
};

export default MyMessage;
