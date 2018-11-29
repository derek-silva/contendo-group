import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MobileApp from "./MobileApp";
import * as serviceWorker from "./serviceWorker";

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

if (isMobileDevice() === false) {
  ReactDOM.render(<App />, document.getElementById("root"));
} else {
  ReactDOM.render(<MobileApp />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
