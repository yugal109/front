import React from "react";

const OtherMessage: React.FC<any> = ({message}) => {
  return (
  
    // <div className="chat-area-main">
    <div className="chat-msg">
      <div className="chat-msg-profile">
        <img
          className="chat-msg-img"
          src={message.user.image}
          alt=""
        />
        <div className="chat-msg-date">Message seen {message.createdAt}</div>
      </div>

      <div className="chat-msg-content">
        <div className="chat-msg-text">
          {message.message}
        </div>
        {/* <div className="chat-msg-text">
          <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" />
        </div> */}
       
      </div>
    </div>
  // </div>

  );
};

export default OtherMessage;
