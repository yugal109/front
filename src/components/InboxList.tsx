import React from 'react'

const InboxList:React.FC = () => {
    return (
        <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
  
        <ul className="list">
          <li className="clearfix selected">
            
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Sohail Khan</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
            
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Rohit Sisodiya</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 7 mins ago
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Kapil Jindal</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Priya</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Lucky</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Monika</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 30 mins ago
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Sumer</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 10 hours ago
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" alt="avatar" />
            <div className="about">
              <div className="name">Maheera</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    )
}

export default InboxList
