import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "../src/store"
import App from './App';
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


