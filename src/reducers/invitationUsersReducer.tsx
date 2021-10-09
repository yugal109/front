export const invitataionUsersReducer = (
  state: any = {
    loading: false,
    invitation_list: [],
    followers_list: [],
    error: "",
    open: false,
    inviting: false,
  },
  action: any
) => {
  switch (action.type) {
    case "FOLLOWERS_LIST_LOAD":
      return { ...state, loading: true };
    case "FOLLOWERS_LIST_LOADED":
      return { ...state, loading: false, followers_list: action.payload };
    case "FOLLOWERS_LIST_RESET":
      return {
        ...state,
        loading: false,
        followers_list: [],
        error: "",
        inviting: false,
      };
    case "OPEN_INVITATION_MODAL":
      return { ...state, open: true };
    case "CLOSE_INVITATION_MODAL":
      return { ...state, open: false };
    case "INVITATION_LOAD_START":
      return { ...state, inviting: true };
    case "ADD_TO_INVITATION_LIST":
      if (action.payload.add === false) {
        return {
          ...state,
          invitation_list: [...state.invitation_list, action.payload.userId],
        };
      } else {
        let new_invitation_list = [];
        console.log(state.invitation_list.length);
        for (let i = 0; i < state.invitation_list.length; i++) {
          if (state.invitation_list[i] === action.payload.userId) {
          } else {
            new_invitation_list.push(action.payload.userId);
          }
        }
        return {
          ...state,
          invitation_list: new_invitation_list,
        };
      }

    default:
      return { ...state };
  }
};
