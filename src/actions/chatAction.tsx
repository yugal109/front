import axios from "../url";

export const chatAction =
  (roomName: string, token: string) => (dispatch: any) => {
    dispatch({ type: "CHAT_ROOM_CREATION_START" });

    axios
      .post(
        "/create",
        {
          name: roomName,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        // console.log(response.data)
        dispatch({
          type: "CHAT_ROOM_CREATIONFINSHED",
          payload: response.data._id,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "CHAT_ROOM_ERROR", payload: error });
      });
  };

export const chatRoomsListAction = (token: string) => (dispatch: any) => {
  dispatch({ type: "CHAT_ROOM_LIST_START" });
  axios
    .get("/inbox", {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      // console.log(response.data);
      dispatch({ type: "CHAT_ROOM_LIST_LOADED", payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const chatRoomMessage = (token: string, roomId: string) => (dispatch:any) => {
    dispatch({type:"MESSAGE_LOAD_START"})

  axios
    .get(`/chat/${roomId}`, {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      // console.log("The response is ",response.data);
      dispatch({type:"MESSAGE_LOADED",payload:response.data})
    })
    .catch((error) => {
      console.log(error);
      dispatch({type:"MESSAGE_ERROR",error:error})
    });
};

export const chatRoomSendMessage=(msg:any)=>(dispatch:any)=>{
  // console.log(msg)
  dispatch({ type: "MESSASGE_ONE_LOAD", payload: msg });


}