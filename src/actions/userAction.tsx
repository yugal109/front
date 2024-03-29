import axios from "../url";
import { START, SUCCESS, ERROR } from "../constants/userConstans";

export const loginAction =
  (email: string, password: string, history: any) => (dispatch: any) => {
    dispatch({ type: START });
    // console.log(email);
    axios
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        dispatch({ type: SUCCESS, payload: response.data });
        dispatch({ type: "LOGGED_IN" });
        // history.push("/");

        // window.location.reload()
      })
      .catch((error) => {
        dispatch({ type: ERROR });
      });
  };
export const googleLoginAction =
  (tokenId: string, history: any) => (dispatch: any) => {
    dispatch({ type: START });
    // console.log(email)

    axios
      .post("/login/googlelogin", {
        tokenId,
      })
      .then((response) => {
        dispatch({ type: SUCCESS, payload: response.data });
        dispatch({ type: "LOGGED_IN" });

        history.push("/");

        window.location.reload()
      })
      .catch((error) => {
        dispatch({ type: ERROR });
      });
  };

export const registerAction =
  (
    email: string,
    username: string,
    password: string,
    fullname: string,
    history: any
  ) =>
  (dispatch: any) => {
    dispatch({ type: START });
    axios
      .post("/users", {
        email,
        fullname,
        username,
        password,
      })
      .then((response) => {
        // console.log(response.data)
        dispatch({ type: SUCCESS });
        history.push("/login");
      })
      .catch((error) => {
        dispatch({ type: ERROR });
      });
  };

export const usersInRoomAction =
  (roomId: string, token: string) => (dispatch: any) => {
    dispatch({ type: "USERS_IN_ROOM_START" });
    axios
      .get(`/users_in_room/${roomId}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log("The users in ",response.data.users);
        dispatch({ type: "USERS_IN_ROOM_LOADED", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
