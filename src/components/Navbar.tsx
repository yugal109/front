import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons";
import NotificationComponent from "./NotificationComponent";
import { useSelector } from "react-redux";
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
  const history = useHistory();
  const data: userInfoDataStructure | any = useSelector<userInfoDataStructure>(
    (state: any) => state.userInfoState
  );

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
                  <i onClick={handleLogout} className="fa fa-sign-out icon"></i>
                </li>
                <li>
                  <i className="fa fa-user icon"></i>
                </li>
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
