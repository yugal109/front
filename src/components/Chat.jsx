import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chatRoomMessage, chatRoomSendMessage } from "../actions/chatAction";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";
import UsersInRoomModal from "./UsersInRoomModal";
import { URL } from "../urlActual";
import { io } from "socket.io-client";

let socket;
const Chat = ({ roomId }) => {
  const { token, id: userId } = useSelector((state) => state.userInfoState);

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    socket = io.connect(URL);
    socket.emit("join", { id: userId, room: roomId });

    dispatch(chatRoomMessage(token, roomId));

    return () => {
      socket.disconnect();
    };
  }, [token, roomId, userId]);

  const { messages, loading, error } = useSelector(
    (state) => state.chatRoomMessageState
  );

  const handleMessageSend = (e) => {

    e.preventDefault(); 

    socket.emit("messageSend", { message, userId, room: roomId });
    setMessage("");

    socket.on("sentMessage", ({ msg }) => {
      console.log("The message is ", msg);  
      
      dispatch(chatRoomSendMessage(msg))
      // messages.push({msg})

    });

    // socket.removeAllListeners("sentMessage")


    
  };

  return (
    <div className="chat">
      <div className="chat-header clearfix">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
          alt="avatar"
        />

        <div className="chat-about">
          <div className="chat-with">Chat with Sohail Khan</div>
          <div className="chat-num-messages">already 1 902 messages</div>
        </div>
       
        <UsersInRoomModal roomId={roomId} token={token} />
      </div>
      <div className="chat-history">
        {loading ? (
          "Loading..."
        ) : (
          <ul className="list">
            {messages &&
              messages.map((message) => (
                <>
                  {message.user._id == userId ? (
                    <MyMessage key={message._id} message={message} />
                  ) : (
                    <OtherMessage message={message} key={message._id} />
                  )}
                </>
              ))}
          </ul>
        )}
      </div>
      <form onSubmit={handleMessageSend} className="chat-message clearfix">
        <input
          // name="message-to-send"
          // id="message-to-send"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i> */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
