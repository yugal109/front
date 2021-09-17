import React from 'react'

const MyMessage:React.FC<any> = ({message}) => {
    return (
       
        <li className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">10:10 AM, Today</span> &nbsp;
          &nbsp;
          <span className="message-data-name">Priya</span>{" "}
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
         {message.message}
        </div>
      </li>
    )
}

export default MyMessage
