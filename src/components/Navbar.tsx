import React, {useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import axios from "../url";
import { useSelector, useDispatch } from "react-redux";
import ChatModal from "./ChatModal";
import SearchModal from "./SearchModal";
import { io } from "socket.io-client";
import "../css/Navbar.scss";
import { URL } from "../urlActual";

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
  let socket=io(URL + "/requests");
  const data: userInfoDataStructure | any = useSelector<userInfoDataStructure>(
    (state: any) => state.userInfoState
  );
  const { notification_length }: any = useSelector<any>(
    (state) => state.notificationsState
  );

  const dispatch = useDispatch();

  const [latestRoomId, setLatestRoomId] = useState<string>("");

  useEffect(() => {
    socket.emit("join", { userId: data.id });
    return () => {
      socket.disconnect();
    };
  }, []);

  useMemo(() => {
    socket.on("allRequests", (data) => {
      console.log(data)
      dispatch({ type: "NOTIFICATIONS_LENGTH", payload: data });
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useMemo(() => {
    if (data && data.token) {
      axios
        .get("/latest_room", {
          headers: {
            "x-auth-token": data.token,
          },
        })
        .then((response) => {
          setLatestRoomId(response.data[0]?._id || "");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  const history = useHistory();

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
                  <ChatModal />
                </li>
                <li>
                  <SearchModal token={data.token} />
                </li>
                <li>
                  <NotificationModal />
                  {notification_length}
                </li>
                <Link to={`/chat/${latestRoomId}`}>
                  <li>
                    <i className="fa fa-comment icon"></i>
                  </li>
                </Link>
                <li>
                  <i onClick={handleLogout} className="fa fa-sign-out icon"></i>
                </li>
                {/* <li>
            <TemporaryDrawer/>
            </li> */}
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
      {/* {showNotificationComponent && <NotificationComponent />} */}
    </>
  );
};
export default Navbar;
