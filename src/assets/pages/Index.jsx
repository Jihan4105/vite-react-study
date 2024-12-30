import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/appStyle.scss";

import IndexApp from "./IndexApp.jsx";

createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
)
