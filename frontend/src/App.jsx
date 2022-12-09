import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [boardState, setBoardState] = React.useState(
    JSON.parse(
      localStorage.getItem("boardState") ??
        JSON.stringify(["", "", "", "", "", ""])
    )
  );
  const [currentRowIdx, setCurrentRowIdx] = React.useState(
    parseInt(localStorage.getItem("currentRowIdx") ?? 0, 10)
  );
  const [gameStatus, setGameStatus] = React.useState(
    localStorage.getItem("gameStatus") ?? "IN_PROGRESS"
  );
  const [answer, setAnswer] = React.useState("POOLS");

  React.useEffect(() => {
    const savedBoardState = boardState.map((word, idx) =>
      word.length === 5 && idx < currentRowIdx ? word : ""
    );
    localStorage.setItem("boardState", JSON.stringify(savedBoardState));
  }, [boardState]);

  React.useEffect(() => {
    localStorage.setItem("currentRowIdx", currentRowIdx);
  }, [currentRowIdx]);

  React.useEffect(() => {
    localStorage.setItem("gameStatus", gameStatus);
  }, [gameStatus]);

  return (
    <div
      style={{
        backgroundColor: "#121213",
        width: "100vw",
        height: "100vh",
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="mt-3 text-light fs-2">Wordlette</h1>
      <hr className="mt-2 mb-0 text-light w-100" />
      <Grid
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
      <Keyboard
        boardState={boardState}
        setBoardState={setBoardState}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
    </div>
  );
};

export default App;
