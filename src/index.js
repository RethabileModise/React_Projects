import React from "react";
import ReactDOM from "react-dom";

const Name = "Rethabile";
const age = 25;

ReactDOM.render(
  <h1>
    Hello {Name}, you are {age} years old today{" "}
  </h1>,
  document.getElementById("root")
);
