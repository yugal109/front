import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  profileAction,
  friendsStatusAction,
  followRequestAction,
} from "../actions/profileAction";
import ProfileUpdateModal from "../components/ProfileUpdateModal";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../css/profile.css";

const ProfileScreen: React.FC<any> = ({ match }) => {
  const dispatch = useDispatch();
  const { profileDetail, loading, error, statusloading, status }: any =
    useSelector<any>((state) => state.profileDetailState);
  const { token, id }: any = useSelector<any>((state) => state.userInfoState);

  useEffect(() => {
    if (id !== match.params.id) {
      dispatch(friendsStatusAction(match.params.id, token));
    }
    dispatch(profileAction(match.params.id, token));
  }, [dispatch, match, token, id]);

  const handelAddingRequest = () => {
    if (status === "follow") {
      dispatch(followRequestAction(token, id, match.params.id, "follow"));
    } else if (status === "pending") {
      dispatch(followRequestAction(token, id, match.params.id, "pending"));
    }
  };

  return (
    <main>
      <div className="profile-container">
        {loading ? (
          "Loding..."
        ) : (
          <>
            <div className="profile-img">
              {/* {profileDetail.image} */}
              <img
                src={profileDetail.image}
                alt="user-img"
                className="user-img"
              />
            </div>
            <div className="user-container">
              <div className="user-info">
                <span className="user-username">{profileDetail.username}</span>
                {match.params.id === id && (
                  <ProfileUpdateModal
                    profileDetail={profileDetail}
                    id={match.params.id}
                    token={token}
                  />
                )}
                <button className="profile-btn">
                  {profileDetail.accountType}
                </button>
                {id !== match.params.id && (
                  <button onClick={handelAddingRequest} className="profile-btn">
                    {statusloading ? (
                      <CircularProgress
                        size={13}
                        style={{ color: "#757575" }}
                      />
                    ) : (
                      <>{status}</>
                    )}
                  </button>
                )}
              </div>
              <div className="user-follows">
                <span>
                  <strong>16</strong> posts
                </span>
                <span>
                  <strong>842</strong> followers
                </span>
                <span>
                  <strong>374</strong> following
                </span>
              </div>
              <div className="user-name">
                <span>
                  <strong>{profileDetail.fullname}</strong>
                </span>
              </div>
              <div className="user-bio">
                <span>403 forbidden</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="line"></div>
      {/* <div className="select-container">
         
          <span>POSTS</span>
        </div>
        <div className="gallery-container">
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
          <img src="img/ronaldo.jpg" alt="" />
        </div> */}
    </main>
  );
};

export default ProfileScreen;
