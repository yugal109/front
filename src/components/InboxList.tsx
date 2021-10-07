import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chatRoomsListAction } from "../actions/chatAction";
import { chatIndividualList } from "../interfaces/chatRoomCreateInterface";
import IndividualInbox from "./IndividualInbox";
const InboxList: React.FC<any> = ({ roomId }) => {
  const { token }: any = useSelector<any>((state) => state.userInfoState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatRoomsListAction(token));
  }, [token, dispatch]);

  const { loading, error, rooms }: any = useSelector<any>(
    (state) => state.chatRoomListState
  );

  return (
    <>
      <div className="conversation-area">
        {rooms &&
          rooms.map((room: chatIndividualList) => (
            <IndividualInbox key={room._id} room={room} roomId={roomId} />
          ))}

        {/* <button className="add"></button> */}
        <div className="overlay"></div>
      </div>
    </>

    // <div className="people-list" id="people-list">
    //   <div className="search">
    //     <input type="text" placeholder="search" />
    //     <i className="fa fa-search"></i>
    //   </div>

    //   {loading ? (
    //     "Loading..."
    //   ) : (
    //     <ul className="list">
    //       {rooms &&
    //         rooms.map((room: chatIndividualList) => (
    //           <IndividualInbox key={room._id} room={room} roomId={roomId} />
    //         ))}
    //     </ul>
    //   )}
    // </div>
  );
};

export default InboxList;

//  <div className="conversation-area">
// <div className="msg online">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Madison Jones</div>
//   <div className="msg-content">
//    <span className="msg-message">What time was our meet</span>
//    <span className="msg-date">20m</span>
//   </div>
//  </div>
// </div>
// <div className="msg">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Miguel Cohen</div>
//   <div className="msg-content">
//    <span className="msg-message">Adaptogen taiyaki austin jean shorts brunch</span>
//    <span className="msg-date">20m</span>
//   </div>
//  </div>
// </div>
// <div className="msg active">
//  <div className="msg-profile group">
//   <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
//    <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
//    <path d="M22 8.5l-10 7-10-7" />
//    <path d="M2 15.5l10-7 10 7M12 2v6.5" /></svg>
//  </div>
//  <div className="msg-detail">
//   <div className="msg-username">CodePen Group</div>
//   <div className="msg-content">
//    <span className="msg-message">Aysenur: I love CSS</span>
//    <span className="msg-date">28m</span>
//   </div>
//  </div>
// </div>
// <div className="msg online">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Lea Debere</div>
//   <div className="msg-content">
//    <span className="msg-message">Shoreditch iPhone jianbing</span>
//    <span className="msg-date">45m</span>
//   </div>
//  </div>
// </div>
// <div className="msg online">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Jordan Smith</div>
//   <div className="msg-content">
//    <span className="msg-message">Snackwave craft beer raclette, beard kombucha </span>
//    <span className="msg-date">2h</span>
//   </div>
//  </div>
// </div>
// <div className="msg">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Jared Jackson</div>
//   <div className="msg-content">
//    <span className="msg-message">Tattooed brooklyn typewriter gastropub</span>
//    <span className="msg-date">18m</span>
//   </div>
//  </div>
// </div>
// <div className="msg online">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt=""/>
//  <div className="msg-detail">
//   <div className="msg-username">Henry Clark</div>
//   <div className="msg-content">
//    <span className="msg-message">Ethical typewriter williamsburg lo-fi street art</span>
//    <span className="msg-date">2h</span>
//   </div>
//  </div>
// </div>
// <div className="msg">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/qs6F3dgm.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Jason Mraz</div>
//   <div className="msg-content">
//    <span className="msg-message">I'm lucky I'm in love with my best friend</span>
//    <span className="msg-date">4h</span>
//   </div>
//  </div>
// </div>
// <div className="msg">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Chiwa Lauren</div>
//   <div className="msg-content">
//    <span className="msg-message">Pabst af 3 wolf moon</span>
//    <span className="msg-date">28m</span>
//   </div>
//  </div>
// </div>
// <div className="msg">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%289%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Caroline Orange</div>
//   <div className="msg-content">
//    <span className="msg-message">Bespoke aesthetic lyft woke cornhole</span>
//    <span className="msg-date">35m</span>
//   </div>
//  </div>
// </div>
// <div className="msg">
//  <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%286%29.png" alt="" />
//  <div className="msg-detail">
//   <div className="msg-username">Lina Ashma</div>
//   <div className="msg-content">
//    <span className="msg-message">Migas food truck crucifix vexi</span>
//    <span className="msg-date">42m</span>
//   </div>
//  </div>
// </div>
// <button className="add"></button>
// <div className="overlay"></div>
// </div>
