import React from "react";

const OtherMessage: React.FC<any> = ({message}) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> Sohail
        </span>
        <span className="message-data-time">10:12 AM, Today</span>
      </div>
      <div className="message my-message">{message.message}</div>
    </li>
  );
};

export default OtherMessage;
