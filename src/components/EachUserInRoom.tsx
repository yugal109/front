import React, { useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "../url";
import "../css/eachuser.css";

const EachUserInRoom: React.FC<any> = ({
  user,
  roomId,
  handleClose,
  token,
  userId,
  admin
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
      {/* {1==2} */}
      {/* <h1>{user.userId._id}</h1> */}
      <h1>
{/* {user.userId._id === userId ? "true" : "false"} */}
</h1>

      {admin._id === userId &&
<>
      {/* {JSON.stringify(user.userId.username)} */}
      <Button variant="contained" onClick={handleClick}>
        {remove ? (
          <CircularProgress style={{ color: "white" }} size={15} />
        ) : (
          "Remove"
        )}
      </Button>
      </>
}
    </div>
  );
};

export default EachUserInRoom;
