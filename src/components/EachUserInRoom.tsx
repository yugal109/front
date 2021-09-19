import React, { useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "../url";
import "../css/eachuser.css";

const EachUserInRoom: React.FC<any> = ({
  user,
  roomId,
  handleClose,
  token,
}) => {
  const [remove, setRemove] = useState<boolean>(false);

  const handleClick = () => {
    setRemove(true);
    axios
      .post(
        `/remove_user/${roomId}`,
        {
          acceptor: user.userId._id,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="individual_users_list_user">
      {user.userId?.username}

      {/* {JSON.stringify(user.userId.username)} */}
      <Button variant="contained" onClick={handleClick}>
        {remove ? (
          <CircularProgress style={{ color: "white" }} size={15} />
        ) : (
          "Remove"
        )}
      </Button>
    </div>
  );
};

export default EachUserInRoom;
