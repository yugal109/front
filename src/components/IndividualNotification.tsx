import React, { useEffect } from "react";
import { notiInterface } from "../interfaces/notificationInterface";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import {
  notificationFollowRequestCancelAction,
  notificationFollowRequestAcceptAction,
} from "../actions/notificationAction";
import { useDispatch, useSelector } from "react-redux";
import "../css/notification.css";

const IndividualNotification: React.FC<any> = ({ notification, token,handleClose }) => {
  const dispatch = useDispatch();
  const history=useHistory()

  useEffect(() => {
    if (
      notification &&
      notification.requestType === "friend_request" &&
      notification.status === "accepted"
    ) {
      dispatch({ type: "NOTFICATION_FOLLOW_REQUEST_ACCEPTED" });
    }
  }, [notification, dispatch]);

  const { cancel, canceledRequest }: any = useSelector<any>(
    (state) => state.notificationFollowRequestCancelState
  );

  const { accepted, acceptLoading }: any = useSelector<any>(
    (state) => state.notificationFollowRequestAcceptState
  );

  const handelCancelRequest = () => {
    dispatch(notificationFollowRequestCancelAction(notification._id, token));
  };

  const handelAcceptFollowRequest = () => {
    dispatch(
      notificationFollowRequestAcceptAction(notification.requestor._id, token)
    );
  };

  const handlePushToProfile = () => {
    handleClose()
    history.push(`/profile/${notification.requestor._id}`)

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

        <div>
          {acceptLoading && (
            <Button variant="contained">
              <CircularProgress style={{ color: "white" }} size={15} />
            </Button>
          )}

          {acceptLoading === false &&
            accepted === false &&
            canceledRequest === false &&
            cancel === false && (
              <Button onClick={handelAcceptFollowRequest} variant="contained">
                Accept
              </Button>
            )}

          {acceptLoading === false && accepted === true && (
            <Button
              onClick={handelAcceptFollowRequest}
              disabled
              variant="contained"
            >
              Accepted
            </Button>
          )}

          {cancel && (
            <>
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                color="primary"
              >
                <CircularProgress style={{ color: "white" }} size={15} />
              </Button>
            </>
          )}

          {canceledRequest === false &&
            cancel === false &&
            acceptLoading === false &&
            accepted === false && (
              <>
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

          {canceledRequest === true && cancel === false && (
            <>
              <Button
                disabled
                style={{ marginLeft: 10 }}
                variant="contained"
                color="primary"
              >
                Canceled
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualNotification;
