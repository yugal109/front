import {
  profileInterface,
  profileActionInterface,
} from "../interfaces/profileInterface";

export const profileReducer = (
  state: profileInterface = {
    loading: false,
    statusloading: false,
    status: "",
    editLoading:false,
    open:false,
    profileDetail: {
      id: "",
      fullname: "",
      username: "",
      accountType: "",
      email: "",
      image: "",
      password: "",
    },
  },
  action: profileActionInterface
) => {
  switch (action.type) {
    case "PROFILE_LOADING_START":
      return { ...state, loading: true };
    case "PROFILE_LOADED":
      return { ...state, loading: false, profileDetail: action.payload,editLoading:false,open:false };
    case "PROFILE_LOAD_ERROR":
      return { ...state, loading: false, error: "Something went wrong." };
    case "PROFILE_EDIT_START":
      return {...state,editLoading:true};
    case 'OPEN_MODAL':
      return {...state,open:true}
    case 'CLOSE_MODAL':
      return {...state,open:false}
    case "FRIENDS_STATUS_START":
      return { ...state, statusloading: true };
    case "FRIENDS_STATUS":
      return { ...state, status: action.payload, statusloading: false };
    case "FRIEND_REQUEST_SENT":
      return { ...state, status: action.payload, statusloading: false };
    default:
      return { ...state };
  }
};
