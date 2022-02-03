import "./index.css";
import React from "react";
import Grid from "../Grid";

function App() {
  localStorage.setItem(
    "gameState",
    JSON.stringify({
      rowIndex: 0,
      solution: "could",
      boardState: ["", "", "", "", "", ""],
      evaluations: [null, null, null, null, null, null],
      gameStatus: "IN_PROGRESS",
    })
  );

  return (
    <div className="container">
      <div className="header">WORDLETTE</div>
      <hr></hr>
      <Grid></Grid>
    </div>
  );
}

export default App;
