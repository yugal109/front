import { info } from "console";
import axios from "../url";

export const profileAction = (id: string, token: string) => (dispatch: any) => {
  dispatch({ type: "PROFILE_LOADING_START" });

  axios
    .get(`/users/${id}`, {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      dispatch({ type: "PROFILE_LOADED", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "PROFILE_ERROR" });

      // console.log(error)
    });
};

export const profileUpdateAction =
  (
    id: string,
    token: string,
    username: string,
    fullname: string,
    accountType: string
  ) =>
  (dispatch: any) => {
    dispatch({type:"PROFILE_EDIT_START"})
    
    axios
      .put(
        `/users/all/${id}`,
        {
          username,
          fullname,
          accountType,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: "PROFILE_LOADED", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "PROFILE_ERROR" });

        // console.log(error)
      });
  };

export const friendsStatusAction =
  (id: string, token: string) => (dispatch: any) => {
    dispatch({ type: "FRIENDS_STATUS_START" });
    axios
      .get(`/users/isfriend/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "FRIENDS_STATUS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "PROFILE_ERROR" });

        // console.log(error)
      });
  };

export const followRequestAction =
  (token: string, requestor: string, acceptor: string, type: string) =>
  (dispatch: any) => {
    dispatch({ type: "FRIENDS_STATUS_START" });

    if (type === "follow") {
      axios
        .post(
          `/requests`,
          {
            requestType: "friend_request",
            requestor,
            acceptor,
          },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((response) => {
          dispatch({ type: "FRIEND_REQUEST_SENT", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "PROFILE_ERROR" });

          // console.log(error)
        });
    } else if (type === "pending") {
      axios
        .post(
          "/requests/deleterequest_by_requestor",
          {
            acceptor,
          },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((response) => {
          dispatch({ type: "FRIEND_REQUEST_SENT", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "PROFILE_ERROR" });

          // console.log(error)
        });
    } else {

      axios
      .post(
        "/remove_friend",
        {
          friend:acceptor,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: "FRIEND_REQUEST_SENT", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "PROFILE_ERROR" });

        // console.log(error)
      });


    }
  };
