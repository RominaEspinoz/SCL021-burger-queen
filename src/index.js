import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./Router/AppRouter";

import "./style.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
