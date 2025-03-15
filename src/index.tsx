import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import "./ui/fonts/fonts.css";
import "./ui/common.css";
import "./ui/box.css";

import App from "./components/app/app";
import { store } from "./services/store";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
