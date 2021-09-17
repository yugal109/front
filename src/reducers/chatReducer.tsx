import {
  chatRoomCreateStateInterface,
  chatRoomActionInterface,
  chatRoomListActionInterface,
  chatRoomListStateInterface,
  chatRoomMessageInterface,
  chatRoomMessageAction,
} from "../interfaces/chatRoomCreateInterface";

export const chatReducer = (
  state: chatRoomCreateStateInterface = { loading: false, modalLoading: false },
  action: chatRoomActionInterface
) => {
  switch (action.type) {
    case "SET_OPEN":
      return { ...state, modalLoading: true };
    case "SET_CLOSE":
      return { ...state, modalLoading: false };
    case "CHAT_ROOM_CREATION_START":
      return { ...state, loading: true };
    case "CHAT_ROOM_CREATIONFINSHED":
      return { ...state, loading: false, roomId: action?.payload };
    case "CHAT_ROOM_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export const chatRoomListReducer = (
  state: chatRoomListStateInterface = { loading: false, error: "" },
  action: chatRoomListActionInterface
) => {
  switch (action.type) {
    case "CHAT_ROOM_LIST_START":
      return { ...state, loading: true };
    case "CHAT_ROOM_LIST_LOADED":
      return { ...state, loading: false, rooms: action.payload };
    case "CHAT_ROOM_LIST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export const chatRoomMessageReducer = (
  state: chatRoomMessageInterface={loading:false,messages:[]},
  action: chatRoomMessageAction
) => {
  switch (action.type) {
    case "MESSAGE_LOAD_START":
      return { ...state, loading: true,messages:[] };
    case "MESSAGE_LOADED":
      return { ...state, loading: false, messages: action.payload };
    case "MESSAGE_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "MESSASGE_ONE_LOAD":
      console.log(state.messages)
      return {...state,messages:[...state.messages,action.payload]};
    default:
      return { ...state };
  }
};
