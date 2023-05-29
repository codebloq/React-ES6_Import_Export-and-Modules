import React from "react";
import ReactDOM from "react-dom";
import valueOfPi, { doublePi, triplePi } from "./math.js";
//Use * (wildCard) to import everything from inside a module
//import * as pi from "./math.js"

ReactDOM.render(
  <div>
    <h1>Value of Pi</h1>
    <hr />
    <ul>
      <li>Pi - {valueOfPi}</li>
      <li>Pi (squared) - {doublePi()}</li>
      <li>Pi (cubed) - {triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
