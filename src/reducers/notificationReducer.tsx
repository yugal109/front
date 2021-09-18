import {
  notificationInterface,
  notificationActionInterface,
} from "../interfaces/notificationInterface";

export const notificationReducer = (
  state: notificationInterface = {
    loading: false,
    notifications: [],
    acceptInviteLoading: false,
    invitationAccepted:false,
    error: "",
    open:false
  },
  action: any
) => {
  switch (action.type) {
    case "OPEN_NOTIFICATION_MODAL":
      return {...state,open:true}
    case "CLOSE_NOTIFICATION_MODAL":
      return {...state,open:false}
    case "NOTIFICATION_LOAD_START":
      return { ...state, loading: true };
    case "NOTIFICATION_LOADED":
      return { ...state, loading: false, notifications: action.payload };
    case "CLEAR_NOTIFICATION_LIST":
      return { ...state, notifications: [] };
    case "NOTIFICATION_ACCEPT_INVITE_START":
      return { ...state, acceptInviteLoading: true, };
    case "NOTIFICATION_ACCEPTED":
      console.log(action.payload.roomId)
      return {...state,acceptInviteLoading:false,invitationAccepted:true,roomId:action.payload}
    default:
      return { ...state };
  }
};

export const notificationFollowRequestCancel = (
  state: any = { cancel: false, canceledRequest: false },
  action: any
) => {
  switch (action.type) {
    case "NOTFICATION_FOLLOW_REQUEST_CANCEL_START":
      return { ...state, cancel: true };
    case "NOTFICATION_FOLLOW_REQUEST_CANCELED":
      return { ...state, cancel: false, canceledRequest: true };
    case "CLEAR_NOTIFICATION_CANCEL_LIST":
      return { ...state, cancel: false, canceledRequest: false };
    default:
      return { ...state };
  }
};

export const notificationFollowRequestAccept = (
  state: any = { acceptLoading: false, accepted: false },
  action: any
) => {
  switch (action.type) {
    case "NOTFICATION_FOLLOW_REQUEST_ACCEPT_START":
      return { ...state, acceptLoading: true };
    case "NOTFICATION_FOLLOW_REQUEST_ACCEPTED":
      return { ...state, acceptLoading: false, accepted: true };
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
