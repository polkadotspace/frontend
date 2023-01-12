import React from "react";
import ReactDOMClient from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import "./index.css";

const container = document.querySelector("#root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
