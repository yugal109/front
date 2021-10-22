import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chatRoomMessage, chatRoomSendMessage } from "../actions/chatAction";
import { useHistory } from "react-router";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";
import UsersInRoomModal from "./UsersInRoomModal";
import InviteUsersModal from "./InviteUsersModal";
import SocketConnection from "../SocketConnection";
import { CircularProgress } from "@material-ui/core";
import { useContext } from "react";
import { ChatInboxSocketContext } from "./WholeContext";

import UserRemovedModal from "../components/UserRemovedModal";

let socket;
const Chat = ({ roomId }) => {
  const history=useHistory()
  const [open, setOpen] = React.useState(false);

  const { token, id: userId } = useSelector((state) => state.userInfoState);

  const { messages, loading, error } = useSelector(
    (state) => state.chatRoomMessageState
  );

  const [message, setMessage] = useState("");
  // const []

  const dispatch = useDispatch();

  useEffect(() => {
    socket = SocketConnection("/");
    if (open === false) {
      socket.emit("join", { id: userId, room: roomId });

      socket.on("messageFromServer", ({ msg }) => {
        dispatch(chatRoomSendMessage(msg));
      });
    }

    return () => {
      socket.disconnect();
    };
  }, [roomId, userId]);

  useEffect(() => {
    socket.on("userRemoved", (data) => {
      if (data && data?.removed_user == userId) {
        setOpen(true);
        socket.off()
        // setTimeout(()=>{
        //   history.push("/")
        // },2000)
        
      } else {
      }
    });
  }, []);

  useEffect(() => {
    socket &&
      socket.on("reactionInMessage", (data) => {
        // let msg = messages.find((e) => e._id === data.msgId);
        // dispatch();
      });
  }, [messages]);

  useMemo(() => {
    dispatch(chatRoomMessage(token, roomId));
  }, [token, roomId]);

  const handleMessageSend = (e) => {
    e.preventDefault();

    socket.emit("messageSend", { message, userId, room: roomId });

    setMessage("");
  };

  return (
    <>
      <div className="chat-area">
        <div className="chat-area-header">
          <div className="chat-area-title">{roomId}</div>
          
          <div className="chat-area-group">
            <img
              className="chat-area-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
              alt=""
            />
            <img
              className="chat-area-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
              alt=""
            />
            <img
              className="chat-area-profile"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
              alt=""
            />
            <UserRemovedModal open={open} setOpen={setOpen} />
            <UsersInRoomModal roomId={roomId} token={token} userId={userId} />
            <InviteUsersModal userId={userId} roomId={roomId} token={token} />
          </div>
        </div>

        <div className="chat-area-main">
          {loading ? (
            <CircularProgress
              style={{ color: "black", marginLeft: 10 }}
              size={35}
            />
          ) : (
            <>
              {messages &&
                messages.map((message) => (
                  <>
                    {message.user._id === userId ? (
                      <>
                        <MyMessage
                          socket={socket}
                          key={message._id}
                          message={message}
                        />
                      </>
                    ) : (
                      <OtherMessage
                        socket={socket}
                        message={message}
                        key={message._id}
                      />
                    )}
                  </>
                ))}
            </>
          )}
        </div>

        <div className="chat-area-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-video"
          >
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-image"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-plus-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-paperclip"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
          <form onSubmit={handleMessageSend} style={{ width: "100%" }}>
            <input
              type="text"
              value={message}
              style={{ textAlign: "start" }}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type something here..."
              required
            />
            {/* <Button>Send</Button> */}
          </form>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-smile"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-thumbs-up"
          >
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
          </svg> */}
        </div>
      </div>
    </>
  );
};

export default Chat;
