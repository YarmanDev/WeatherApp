import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import "./index.scss";
import "./scss/reset.scss";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";

const middlewares = [thunkMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
