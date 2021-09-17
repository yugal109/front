import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../actions/searchAction";
import Fade from "@material-ui/core/Fade";
import { notiInterface } from "../interfaces/notificationInterface";
import IndividualSearchListUsers from "./IndividualSearchListUsers";

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

const SearchModal: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState<string>("");

  const dispatch = useDispatch();
  const { loading, users, error }: any = useSelector<any>(
    (state) => state.searchUsersState
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelSearchUser = (e: any) => {
    e.preventDefault();
    dispatch(searchAction());
  };

  return (
    <>
      <i className="fa fa-search icon" onClick={handleOpen}></i>

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
            <h2 id="transition-modal-title">Search</h2>

            <form onSubmit={handelSearchUser} className="login-form">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
              />

              <button className="but">Search</button>
            </form>
            <IndividualSearchListUsers />

            {users &&
              users.map((user: notiInterface) =>
               <IndividualSearchListUsers key={user._id} />)}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SearchModal;
