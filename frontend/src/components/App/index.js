import "./index.css";
import React from "react";
import Grid from "../Grid";

function App() {
  localStorage.setItem("solution", "could");
  localStorage.setItem("gameStatus", "IN_PROGRESS");

  return (
    <div className="container">
      <div className="header">WORDLETTE</div>
      <hr></hr>
      <Grid></Grid>
    </div>
  );
}

export default App;
