import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { invitationUsersAction } from "../actions/invitationUsersAction";
import IndividualInviteList from "./IndividualInviteList";
import Fade from "@material-ui/core/Fade";
import { inviteAllUsers } from "../actions/invitationUsersAction";
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

const InviteUsersModal: React.FC<any> = ({ userId, token, roomId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { loading, followers_list, open, inviting, error }: any =
    useSelector<any>((state) => state.invitationUsersState);

  const handleOpen = () => {
    dispatch(invitationUsersAction(userId, token));
    dispatch({ type: "OPEN_INVITATION_MODAL" });
  };
  const handleClose = () => {
    dispatch({ type: "FOLLOWERS_LIST_RESET" });

    dispatch({ type: "CLOSE_INVITATION_MODAL" });
  };

  const handleInviteUsers = () => {
    dispatch(inviteAllUsers(followers_list, roomId, token));
  };

  return (
    <>
      <span onClick={handleOpen}>
        <i
          className="fa fa-envelope"
          // style={{ marginLeft: 10, marginTop: 10 }}
        ></i>
      </span>

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
              Invite Users
              {loading && (
                <CircularProgress
                  style={{ color: "black", marginLeft: 10 }}
                  size={15}
                />
              )}
            </h2>
            <div style={{ height: 100, overflowY: "scroll" }}>
              {followers_list &&
                followers_list.map((follower: any) => (
                  <IndividualInviteList
                    key={follower._id}
                    follower={follower}
                  />
                ))}
            </div>
            <button
              onClick={handleInviteUsers}
              style={{ marginTop: 10 }}
              className="but"
            >
              {inviting ? (
                <CircularProgress style={{ color: "white" }} size={15} />
              ) : (
                "Invite"
              )}
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default InviteUsersModal;
