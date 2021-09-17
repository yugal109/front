import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { profileUpdateAction } from "../actions/profileAction";
import { CircularProgress } from "@material-ui/core";

import "../css/Login.css";

import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: 400,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    color: "black",
    width: 600,
  },
}));

const ProfileUpdateModal: React.FC<any> = ({ profileDetail, id, token }) => {
  const classes = useStyles();
  const { open, editLoading }: any = useSelector<any>(
    (state) => state.profileDetailState
  );

  // const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>(profileDetail.username);
  const [fullname, setFullname] = useState<string>(profileDetail.fullname);
  const [email, setEmail] = useState<string>(profileDetail.email);
  const [accountType, setAccountType] = useState<string>(
    profileDetail.accountType
  );

  const handleOpen = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handelUpdateProfile = (e: any) => {
    e.preventDefault();
    dispatch(profileUpdateAction(id, token, username, fullname, accountType));
  };

  return (
    <>
      <button className="profile-btn" onClick={handleOpen}>
        Edit Profile
      </button>
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
            <h2 id="transition-modal-title">Profile Info</h2>
            {/* <div className="form"> */}
            <div
              className="login_header"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Update
            </div>

            <form onSubmit={handelUpdateProfile} className="login-form">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
              />
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                placeholder="fullname"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
              />

              <input
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                type="text"
                placeholder="account type"
              />
              <button className="but">
                {editLoading ? (
                  <CircularProgress size={16} style={{ color: "white" }} />
                ) : (
                  "Update"
                )}
              </button>
              <div style={{ margin: 10 }}></div>
            </form>
            {/* </div> */}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ProfileUpdateModal;
