import React, { useState } from "react";
import ReactionModal from "./ReactionModal";
import { useSelector } from "react-redux";
import axios from "../url";

const OtherMessage: React.FC<any> = ({ message, socket }) => {
  const { token, id: userId }: any = useSelector<any>(
    (state) => state.userInfoState
  );
  const [length, setLength] = useState<number>(message.reactions.length);

  const handleReaction = () => {
    socket.emit("likeMessage", {
      messageId: message._id,
      userId: userId,
      room: message.chatRoom,
    });
  };

  return (
    <div className="chat-msg">
      <div className="chat-msg-profile">
        <img className="chat-msg-img" src={message.user.image} alt="" />
        <div className="chat-msg-date">Message seen {message.createdAt}</div>
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
      </div>
    </div>
    // </div>
  );
};

export default OtherMessage;
