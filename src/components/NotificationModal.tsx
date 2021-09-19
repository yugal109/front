import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import { notificationAction } from "../actions/notificationAction";
import { notiInterface } from "../interfaces/notificationInterface";
import IndividualNotification from "./IndividualNotification";
import IndividualInvitationNotification from "./IndividualInvitationNotification";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    color: "black",
    width: 600,
  },
}));

const NotificationModal = () => {
  const dispatch = useDispatch();

  const classes = useStyles();


  const { token }: any = useSelector<any>((state) => state.userInfoState);
  const { loading,open, notifications, error }: any = useSelector<any>(
    (state) => state.notificationsState
  );

  const handleOpen = () => {

    dispatch(notificationAction(token));
    dispatch({type:"OPEN_NOTIFICATION_MODAL"})

  };

  const handleClose = () => {

    dispatch({ type: "CLEAR_NOTIFICATION_LIST" });
    dispatch({ type: "CLEAR_NOTIFICATION_CANCEL_LIST" });
    dispatch({type:"CLOSE_NOTIFICATION_MODAL"})


  };

  return (
    <>
      <i className="fa fa-bell icon" onClick={handleOpen}></i>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              Notifications
              {loading && (
                <CircularProgress
                  style={{ color: "black", marginLeft: 10 }}
                  size={20}
                />
              )}
            </h2>
            <div style={{height:100,overflowY:"scroll"}}>
            {loading === false && (
              <>
                {notifications.map((noti: notiInterface) => (
                  <>
                    {noti.requestType === "invitation" ? (
                      
                      <IndividualInvitationNotification
                        key={noti._id}
                        notification={noti}
                        token={token}
                        // handleClose={handleClose}
                      />
                    ) : (
                      <IndividualNotification
                        token={token}
                        notification={noti}
                        key={noti._id}
                        handleClose={handleClose}

                      />
                    )}
                  </>
                ))}
              </>
            )}
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default NotificationModal;
