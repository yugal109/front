import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import {
  loginReducer,
  userInfoReducer,
  registerReducer,
  usersInRoomReducer,
} from "./reducers/userReducer";
import {
  chatReducer,
  chatRoomListReducer,
  chatRoomMessageReducer,
} from "./reducers/chatReducer";
import { profileReducer } from "./reducers/profileReducer";
import {
  notificationReducer,
  notificationFollowRequestCancel,
  notificationFollowRequestAccept,
} from "./reducers/notificationReducer";
import { searchReducer } from "./reducers/searchReducer";
import { reactionReducer } from "./reducers/reactionReducer";
import { invitataionUsersReducer } from "./reducers/invitationUsersReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const rootReducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  userInfoState: userInfoReducer,
  createRoomState: chatReducer,
  chatRoomListState: chatRoomListReducer,
  chatRoomMessageState: chatRoomMessageReducer,
  profileDetailState: profileReducer,
  usersInRoomState: usersInRoomReducer,
  notificationsState: notificationReducer,
  searchUsersState: searchReducer,
  notificationFollowRequestCancelState: notificationFollowRequestCancel,
  notificationFollowRequestAcceptState: notificationFollowRequestAccept,
  invitationUsersState: invitataionUsersReducer,
  reactionInMessagesState:reactionReducer
});

const userInfo = localStorage.getItem("userInfo");
const initailState = {};

export const store = createStore(
  rootReducers,
  initailState,
  composeEnhancers(applyMiddleware(...middleware))
);

// export type RootState=ReturnType<typeof store.getState>

export type State = ReturnType<typeof rootReducers>;
