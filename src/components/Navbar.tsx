import React, { useState,useMemo, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import NotificationsIcon, { Chat } from "@material-ui/icons";
import NotificationModal from "./NotificationModal";
import axios from "../url"
import NotificationComponent from "./NotificationComponent";
import { useSelector } from "react-redux";
import ChatModal from "./ChatModal";
import SearchModal from "./SearchModal";
import "../css/Navbar.scss";

interface userInfoDataStructure {
  id: string;
  fullname: string;
  username: string;
  accountType: string;
  email: string;
  image: string;
  password?: string;
}
const Navbar: React.FC = () => {

  const data: userInfoDataStructure | any = useSelector<userInfoDataStructure>(
    (state: any) => state.userInfoState
  );

  const [latestRoomId,setLatestRoomId]=useState<string>("")

  
  useMemo(()=>{

    if(data && data.token){
      axios.get("/latest_room",{
        headers:{
          "x-auth-token":data.token
        }
      })
      .then((response)=>{
        console.log(response.data)
        setLatestRoomId(response.data[0]?._id || "")
      }).catch((error)=>{
        console.log(error)
      })
    }
    
  },[data])


  const history = useHistory();
 
  const [showNotificationComponent, setShowNotificationComponent] =
    useState<boolean>(false);

  const handelShowNotification = () => {
    setShowNotificationComponent(!showNotificationComponent);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      <nav>
        <div className="container">
        

          <ul className="navbar-right">
            <li>
              <Link to="/">
                <i className="fa fa-home icon"></i>
              </Link>
            </li>
            {data && data?.username ? (
              <>
              <li>
              <ChatModal/>
                </li>
                <li>
              <SearchModal token={data.token}/>
                </li>
                <li>
                  <NotificationModal/>
                  </li>
              <Link to={`/chat/${latestRoomId}`}>
               <li>
                  <i className="fa fa-comment icon"></i>
                </li>
                </Link>
                <li>
                  <i onClick={handleLogout} className="fa fa-sign-out icon"></i>
                </li>
                <Link to={`/profile/${data.id}`}>
                <li>
                  <i className="fa fa-user icon"></i>
                </li>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link to="/login">
                    <i className="fa fa-sign-in icon"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <i className="fa fa-user-plus icon"></i>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {showNotificationComponent && <NotificationComponent />}
    </>
  );
};
export default Navbar;
