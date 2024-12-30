import { createRoot } from "react-dom/client"
import React from "react";
import FancyText from '../js/FancyText';
import InspirationGenerator from "../js/inspirationGenerator";
import Copyright from '../js/Copyright';

createRoot(document.querySelector("#root")).render(
  // <React.StrictMode>
    <section className="section">
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </section>
  // </React.StrictMode>
)
