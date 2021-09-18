import axios from "../url";

export const invitationUsersAction =
  (userId: string, token: string) => (dispatch: any) => {
    dispatch({ type: "FOLLOWERS_LIST_LOAD" });
    axios
      .get(`/friends/${userId}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({ type: "FOLLOWERS_LIST_LOADED", payload: response.data });
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const inviteAllUsers =
  (userList: any, roomId: string,token:string) => (dispatch: any) => {
      dispatch({type:"INVITATION_LOAD_START"})
    axios
      .post(`/requests/invite`,{
          userList,
          roomId
      },{
        headers:{
            'x-auth-token':token
        }
      })
      .then((response) => {
        dispatch({ type: "FOLLOWERS_LIST_RESET" });
        dispatch({ type: "CLOSE_INVITATION_MODAL" });
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
