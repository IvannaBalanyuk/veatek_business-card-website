import React from "react";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "./ui/fonts/fonts.css";
import "./ui/common.css";
import "./ui/box.css";

import App from "./components/app/app";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
