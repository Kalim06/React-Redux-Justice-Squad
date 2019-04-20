import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
