import React from 'react'

const Chat:React.FC = () => {
    return (
        <div className="chat">
        <div className="chat-header clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
          
          <div className="chat-about">
            <div className="chat-with">Chat with Sohail Khan</div>
            <div className="chat-num-messages">already 1 902 messages</div>
          </div>
          <i className="fa fa-star"></i>
        </div>
        
        <div className="chat-history">
          <ul className="list">
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                <span className="message-data-name" >Priya</span> <i className="fa fa-circle me"></i>
                
              </div>
              <div className="message other-message float-right">
                Hi Sohail, how are you?
              </div>
            </li>
            
            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Sohail</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message">
                I am good.
              </div>
            </li>
            
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                <span className="message-data-name" >Priya</span> <i className="fa fa-circle me"></i>
                
              </div>
              <div className="message other-message float-right">
                Ok, If you could master one technology this year, what would it be?
              </div>
            </li>
            
            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Sohail</span>
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                Python.
              </div>
            </li>
            
            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Sohail</span>
                <span className="message-data-time">10:31 AM, Today</span>
              </div>
              <i className="fa fa-circle online"></i>
              <i className="fa fa-circle online" style={{color: "#AED2A6"}}></i>
              <i className="fa fa-circle online" style={{color:"#DAE9DA"}}></i>
            </li>
            
          </ul>
          
        </div>
        
        <div className="chat-message clearfix">
          <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message"></textarea>
                  
          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
          <i className="fa fa-file-image-o"></i>
          
          <button>Send</button>
  
        </div>
        
      </div>
      
    )
}

export default Chat
