import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import YoutubeState from "./context/youtube/YoutubeState";

ReactDOM.render(
  <YoutubeState>
    <App />
  </YoutubeState>,
  document.getElementById("root")
);
