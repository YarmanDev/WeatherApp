import { React } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./scss/null.scss";
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
