import React from "react";
import ReactDOM from "react-dom/client";
import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

import App from "./components/App";
import config from "./config";
import createRootReducer from "./reducers";

import { doInit } from "./actions/auth";
import { createHashHistory } from "history";

import "bootstrap/dist/css/bootstrap.min.css";

const history = createHashHistory();

export function getHistory() {
  return history;
}

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common["Content-Type"] = "application/json";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(routerMiddleware(history), ReduxThunk)),
);

store.dispatch(doInit());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

//서비스 워커는 캐시를 강하게 해서, 변경된 코드가 바로 반영 안 될 수 있음
//개발 중엔 꺼두고(unregister), PWA로 배포할 때만 register()로 변경 추천
serviceWorker.unregister();
