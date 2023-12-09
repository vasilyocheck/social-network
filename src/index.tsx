import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { store } from "redux/redux-store";
import { Provider } from "react-redux";
import { Application } from "Application";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Application />
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
