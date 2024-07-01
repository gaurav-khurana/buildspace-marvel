import "./App.scss";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./router";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <CustomRouter />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
