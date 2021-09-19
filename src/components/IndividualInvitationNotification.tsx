import React, { useEffect } from "react";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../css/notification.css"
import { acceptInviteAction } from "../actions/notificationAction";

const IndividualInvitationNotification: React.FC<any> = ({
  notification,
  token,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { acceptInviteLoading, invitationAccepted, roomId }: any =
    useSelector<any>((state) => state.notificationsState);

  useEffect(() => {
    if (
      notification &&
      notification.requestType === "invitation" &&
      notification.status === "accepted"
    ) {
      //  console.log(notification.roomId)
      dispatch({
        type: "NOTIFICATION_ACCEPTED",
        payload: { roomId: notification.roomId },
      });
    }
  }, [notification, dispatch]);

  const handleAccept = () => {
    console.log(notification.roomId)
    dispatch(acceptInviteAction(token, notification._id, notification.roomId));
  };

  const goToRoom = () => {
    dispatch({ type: "CLOSE_NOTIFICATION_MODAL" });
    history.push(`/chat/${notification.roomId}`);
  };

  return (
    <div className="notification_body">
      <div className="requestor_detail">
        <Avatar alt="Remy Sharp" src={notification.requestor.image} />

        <div>
          {notification.requestor.username} has requested you to join room-
          {notification.roomName} .
          {/* {roomId} */}
        </div>

        <div>
          {acceptInviteLoading === true && invitationAccepted === false && (
            <Button disabled style={{ marginLeft: 10 }} variant="contained">
              <CircularProgress style={{ color: "white" }} size={15} />
            </Button>
          )}
          
          {acceptInviteLoading === false && invitationAccepted === false && (
            <Button
              onClick={handleAccept}
              style={{ marginLeft: 10 }}
              variant="contained"
            >
              Accept
            </Button>
          )}
          {acceptInviteLoading === false &&
            invitationAccepted === true &&
            roomId && (
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                onClick={goToRoom}
              >
                Enter
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default IndividualInvitationNotification;
