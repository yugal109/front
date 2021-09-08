import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

const middleware = [thunk];
const rootReducers = combineReducers(reducer);

const initailState = {};
const store = createStore(rootReducers, initailState,composeEnhancers(applyMiddleware(...middleware),));

export default store;
