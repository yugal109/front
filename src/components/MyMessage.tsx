import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reactionAction } from "../actions/reactionAction";

import ReactionModal from "./ReactionModal";
import "../css/reaction.css";

const MyMessage: React.FC<any> = ({ message }) => {
  const { token }: any = useSelector<any>((state) => state.userInfoState);
  const [length, setLength] = useState<number>(message.reactions.length);

  const dispatch = useDispatch();
  const handleReaction = () => {
    dispatch(reactionAction(token, message._id, setLength, length));
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
