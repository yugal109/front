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
  }, [token]);

  const { loading, error, rooms }: any = useSelector<any>(
    (state) => state.chatRoomListState
  );

  return (
    <div className="people-list" id="people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        <i className="fa fa-search"></i>
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <ul className="list">
          {rooms &&
            rooms.map((room: chatIndividualList) => (
              <IndividualInbox key={room._id} room={room} roomId={roomId} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default InboxList;
