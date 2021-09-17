import {
  notificationInterface,
  notificationActionInterface,
} from "../interfaces/notificationInterface";
export const notificationReducer = (
  state: notificationInterface={loading:false,notifications:[],error:""},
  action: notificationActionInterface
) => {
  switch (action.type) {
    case "NOTIFICATION_LOAD_START":
        return {...state,loading:true}
    case "NOTIFICATION_LOADED":
        return {...state,loading:false,notifications:action.payload}
    case "CLEAR_NOTIFICATION_LIST":
      return {...state,notifications:[]}
    default:
      return { ...state };
  }
};


// status: "",
// _id: "",
// requestType: "",
// acceptor: "",
// requestor: {
//   accountType: "",
//   isAdmin: null,
//   image: "",
//   _id: "",
//   fullname: "",
//   username: "",
//   email: "",
// },