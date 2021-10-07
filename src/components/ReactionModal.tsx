import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { reactionListsAction } from "../actions/reactionAction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { userInterface } from "../interfaces/notificationInterface";

import "../css/usersinroom.css";

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

const ReactionModal: React.FC<any> = ({ token, msgId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { loading, reactionsList }: any = useSelector<any>(
    (state) => state.reactionInMessagesState
  );

  const handleOpen = () => {
    dispatch(reactionListsAction(token, msgId));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleOpen}>
        <i className="fa fa-heart"></i>
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
            <h2 id="transition-modal-title">Reactions</h2>

            {reactionsList &&
              reactionsList.map((user: any) => (
                <div key={user._id} className="individual_users_list_user">
                  {user.userId.username}
                </div>
              ))}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ReactionModal;
