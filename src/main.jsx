import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const container = document.getElementById("app");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDom.render(<App tab="home" />, container);

export const server = `https://api.coingecko.com/api/v3`;
