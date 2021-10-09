import React, { useEffect, useState } from "react";
import { notiInterface } from "../interfaces/notificationInterface";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import axios from "../url";
import { useDispatch } from "react-redux";
import "../css/notification.css";

const IndividualNotification: React.FC<any> = ({
  notification,
  token,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const [accepted, setAccepted] = useState<boolean>(false);
  const [canceled, setCanceled] = useState<boolean>(false);
  const [acceptLoading, setAcceptLoading] = useState<boolean>(false);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);

  useEffect(() => {
    if (notification && notification.status === "pending") {
      setAccepted(false);
    } else {
      setAccepted(true);
    }
  }, []);

  useEffect(() => {
    if (
      notification &&
      notification.requestType === "friend_request" &&
      notification.status === "accepted"
    ) {
      dispatch({ type: "NOTFICATION_FOLLOW_REQUEST_ACCEPTED" });
    }
  }, [notification, dispatch]);

  const handelCancelRequest = () => {
    setCancelLoading(true);
    axios
      .delete(`/requests/deleterequest/${notification._id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        setCancelLoading(false);
        // setAccepted(false)
        setCanceled(true);
       
      })
      .catch((error) => {
        console.log(error);
        setCancelLoading(false);
      });
  };

  const handelAcceptFollowRequest = () => {
    setAcceptLoading(true);
    axios
      .post(
        `/requests/addfriend`,
        {
          requestor: notification.requestor._id,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        setAcceptLoading(false);
        setAccepted(true);

      })
      .catch((error) => {
        setAcceptLoading(false);


      });
  };

  const handlePushToProfile = () => {
    handleClose();
    history.push(`/profile/${notification.requestor._id}`);
  };
  return (
    <div className="notification_body">
      <div className="requestor_detail">
        <Avatar
          onClick={handlePushToProfile}
          alt="Remy Sharp"
          src={notification.requestor.image}
        />
        <div>
   
          {notification.requestor.username} has requested to follow you.
        </div>

        {accepted === true && (

          <>
            <Button
             
              disabled
              variant="contained"
            >
              Accepted
            </Button>
          </>
        )}

        {accepted === false &&
          acceptLoading === false &&
          cancelLoading === false && canceled===false && (
            <>
              <Button onClick={handelAcceptFollowRequest} variant="contained">
                Accept
              </Button>

              <Button
                onClick={handelCancelRequest}
                style={{ marginLeft: 10 }}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </>
          )}

        {acceptLoading === true && (
          <>
            <Button disabled variant="contained">
              <CircularProgress style={{ color: "white" }} size={15} />
            </Button>
            <Button
              style={{ marginLeft: 10 }}
              disabled
              variant="contained"
              color="primary"
            >
              Cancel
            </Button>
          </>
        )}

        {cancelLoading === true && (
          <>
            <Button disabled variant="contained">
              Accept
            </Button>
            <Button
              style={{ marginLeft: 10 }}
              variant="contained"
              color="primary"
            >
              <CircularProgress style={{ color: "white" }} size={15} />
            </Button>
          </>
        )}

        {canceled && (
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            disabled
            color="primary"
          >
            Canceled
          </Button>
        )}
      </div>
    </div>
  );
};

export default IndividualNotification;
