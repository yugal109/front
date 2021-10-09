import React, { useEffect, useState } from "react";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../css/notification.css";
import axios from "../url";

const IndividualInvitationNotification: React.FC<any> = ({
  notification,
  token,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [acceptInviteLoading, setAcceptInviteLoading] = useState<any>(false);
  const [invitationAccepted, setInvitationAccepted] = useState<any>(false);
  const [error,setError]=useState<string>("")

  useEffect(() => {
    if (notification && notification.status === "pending") {
      setInvitationAccepted(false);
    } else {
      setInvitationAccepted(true);
    }
  }, [notification]);

  const handleAccept = () => {
    setAcceptInviteLoading(true);
    axios
      .post(
        `/requests/accept/${notification._id}`,
        {
          acceptor: "ashfklsdjafsadfklj",
          roomId: notification.roomId,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        setAcceptInviteLoading(false);
        setInvitationAccepted(true);
      })
      .catch((error) => {
        setError("Something went wrong.")
        setAcceptInviteLoading(false);
      });
    // dispatch(acceptInviteAction(token, notification._id, notification.roomId));
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
          {notification.requestor.username} has invited you to join room-
          {notification.roomName} .{/* {roomId} */}
          {/* {error} */}
        </div>

        <div>
          {acceptInviteLoading === true && (
            <Button disabled style={{ marginLeft: 10 }} variant="contained">
              <CircularProgress style={{ color: "white" }} size={15} />
            </Button>
          )}

          {invitationAccepted === false && acceptInviteLoading === false && (
            <Button
              onClick={handleAccept}
              style={{ marginLeft: 10 }}
              variant="contained"
            >
              Accept
            </Button>
          )}

          {invitationAccepted === true && acceptInviteLoading === false && (
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
