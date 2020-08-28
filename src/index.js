import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import "normalize.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
