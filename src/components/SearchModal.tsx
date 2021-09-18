import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../actions/searchAction";
import Fade from "@material-ui/core/Fade";
import { notiInterface } from "../interfaces/notificationInterface";
import IndividualSearchListUsers from "./IndividualSearchListUsers";
import { CircularProgress } from "@material-ui/core";

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

const SearchModal: React.FC<any> = ({ token }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const [search, setSearch] = React.useState<string>("");

  const dispatch = useDispatch();
  const { loading, search,users,open, error }: any = useSelector<any>(
    (state) => state.searchUsersState
  );

  const handleOpen = () => {
    dispatch({type:"OPEN_SEARCH_MODAL"})
  };

  const handleClose = () => {
    dispatch({type:"CLOSE_SEARCH_MODAL"})
  };

  const handelSearchUser = (e: any) => {
    e.preventDefault();
    dispatch(searchAction(search, token));
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
                onChange={(e) => dispatch({type:"SET_SEARCH",payload:e.target.value})}
                type="text"
                placeholder="Search"
              />

              <button className="but">
                {loading ? (
                  <CircularProgress style={{ color: "white" }} size={15} />
                ) : (
                  "Search"
                )}
              </button>
            </form>
           

            {users &&
              users.map((user: notiInterface) => (
                <IndividualSearchListUsers key={user._id} user={user} />
              ))}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SearchModal;
