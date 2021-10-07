import axios from "../url";
import { Dispatch } from "redux";
export const notificationAction = (token: string) => (dispatch: any) => {
  dispatch({ type: "NOTIFICATION_LOAD_START" });

  axios
    .get("/requests", {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      // console.log(response.data);
      dispatch({ type: "NOTIFICATION_LOADED", payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const notificationFollowRequestCancelAction =
  (id: string, token: string) => (dispatch: any) => {
    dispatch({ type: "NOTFICATION_FOLLOW_REQUEST_CANCEL_START" });
    axios
      .delete(`/requests/deleterequest/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: "NOTFICATION_FOLLOW_REQUEST_CANCELED" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const notificationFollowRequestAcceptAction =
  (requestor: string, token: string) => (dispatch: any) => {
    dispatch({ type: "NOTFICATION_FOLLOW_REQUEST_ACCEPT_START" });

    axios
      .post(
        `/requests/addfriend`,
        {
          requestor,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        dispatch({
          type: "NOTFICATION_FOLLOW_REQUEST_ACCEPTED",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const acceptInviteAction =
  (token: string, id: string, roomId: string) => (dispatch: any) => {
    dispatch({ type: "NOTIFICATION_ACCEPT_INVITE_START" });
    axios
      .post(
        `/requests/accept/${id}`,
        {
          acceptor: "ashfklsdjafsadfklj",
          roomId,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        
        dispatch({ type: "NOTIFICATION_ACCEPTED",payload:response.data.roomId });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export const notificationLengthAction =
  (token: string) => (dispatch: Dispatch) => {

    axios
      .get(
        `/requests`,
        
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        // dispatch({ type: "NOTIFICATION_LENGTH",payload:response.data.roomId });
      })
      .catch((error) => {
        console.log(error);
      });
  };

