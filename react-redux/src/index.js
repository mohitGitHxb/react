import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import Store from "./store/index";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
