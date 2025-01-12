import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import SnowflakeCursor from "./hooks/use-snowFlake";
import LoadingScreen from "./components/LoadingScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <SnowflakeCursor/>
    <LoadingScreen />
    <App />
  </>
);
