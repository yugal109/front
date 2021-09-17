import React from "react";
import { notiInterface } from "../interfaces/notificationInterface";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "../css/notification.css";


const IndividualNotification:React.FC<any> = ({notification}) => {
  return (
    <div className="notification_body">
        <div className="requestor_detail">
      <Avatar alt="Remy Sharp" src={notification.requestor.image} />
      <div>{notification.requestor.username}{' '}
      has requested to follow you.
      </div>
      </div>

      <div >
<Button variant="contained" >Accept</Button>
<Button style={{marginLeft:10}} variant="contained"color="primary" >Cancel</Button>

      </div>
    </div>
  );
};

export default IndividualNotification;
