import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import { usersInRoomAction } from "../actions/userAction";
import EachUserInRoom from "./EachUserInRoom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { notiInterface } from "../interfaces/notificationInterface";

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

const UsersInRoomModal: React.FC<any> = ({ roomId, token,userId }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const { loading, admin, users, error }: any = useSelector<any>(
    (state) => state.usersInRoomState
  );

  // useEffect(()=>{
  // },[dispatch])

  const handleOpen = () => {
    dispatch(usersInRoomAction(roomId, token));

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <i onClick={handleOpen} className="fa fa-users"></i> */}
      <span onClick={handleOpen}>
        
      <i className="fa fa-users"></i> 

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
              Users Room
              {loading && (
                <CircularProgress style={{ color: "black",marginLeft:10 }} size={15} />
              )}
            </h2>

            {!loading && (
              <>
                <div className="individual_users">
                  {admin.username}
                  <span
                    style={{
                      margin: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "green",
                      color: "white",
                    }}
                  >
                    Admin
                  </span>
                </div>
                <>
                  {users &&
                    users.map((usr: notiInterface) => (
                      <EachUserInRoom
                        key={usr._id}
                        token={token}
                        userId={userId}
                        roomId={roomId}
                        user={usr}
                        admin={admin}
                        handleClose={handleClose}
                      />
                    ))}
                </>
              </>
            )} 
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default UsersInRoomModal;
