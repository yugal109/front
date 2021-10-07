import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { chatRoomCreateStateInterface } from "../interfaces/chatRoomCreateInterface";
import { chatAction } from "../actions/chatAction";
import { useHistory } from "react-router";
import "../css/chatmodal.css";


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

const ChatModal: React.FC = () => {
  const { token }: any = useSelector<any>((state) => state.userInfoState);
  const history = useHistory();

  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [roomName, setRoomName] = React.useState<string>("");

  const dispatch = useDispatch();
  const { loading, error, roomId, modalLoading }: any = useSelector<any>(
    (state) => state.createRoomState
  );

  const handleOpen = () => {
    // setOpen(true);
    dispatch({ type: "SET_OPEN" });
  };

  const handleClose = () => {
    dispatch({ type: "SET_CLOSE" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(chatAction(roomName, token));
    setRoomName("")
    // history.push(`/chat/${roomId}`);
  };

  const handleGoToRoom=()=>{
    history.push(`/chat/${roomId}`)
    dispatch({type:"SET_CLOSE"})
  }

  return (
    <>
      {/*
       */}
      <i onClick={handleOpen} className="fa fa-plus-square icon"></i>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalLoading}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalLoading}>
          <div className={classes.paper}>
            {/* {roomId} */}
            <h2 id="transition-modal-title">Create Room</h2>
            <form onSubmit={handleSubmit} className="body">
              <input
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Room Name"
                required
              />
              {roomId ? (
                <button className="but"  onClick={handleGoToRoom}  >
                  Go To Room
                </button>
              ) : (
                <button className="but">
                  {loading ? "Creating" : "Create"}
                </button>
              )}
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ChatModal;
