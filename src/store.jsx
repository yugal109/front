import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { loginReducer,userInfoReducer, registerReducer,usersInRoomReducer } from "./reducers/userReducer";
import { chatReducer,chatRoomListReducer,chatRoomMessageReducer } from "./reducers/chatReducer";
import { profileReducer } from "./reducers/profileReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { searchReducer } from "./reducers/searchReducer";
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// interface userInformation {
//   userInfo: {
//     username: string;
//     id: string;
//     fullname: string;
//     accountType: string;
//     email: string;
//     image: string;
//     token: string;
//   };
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const rootReducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  userInfoState:userInfoReducer,
  createRoomState:chatReducer,
  chatRoomListState:chatRoomListReducer,
  chatRoomMessageState:chatRoomMessageReducer,
  profileDetailState:profileReducer,
  usersInRoomState:usersInRoomReducer,
  notificationsState:notificationReducer,
  searchUsersState:searchReducer

});

// const userInfo:userInformation|null=localStorage.getItem("userInfo");
const initailState = {
comments:[1,2,3]
};


export const store = createStore(
  rootReducers,
  initailState,
  composeEnhancers(applyMiddleware(...middleware))
);

// export type RootState=ReturnType<typeof store.getState>


