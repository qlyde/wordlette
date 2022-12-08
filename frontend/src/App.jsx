import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Grid from "./components/Grid";

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
  const [answer, setAnswer] = React.useState("REACT");

  React.useEffect(() => {
    localStorage.setItem("boardState", JSON.stringify(boardState));
  }, [boardState]);

  React.useEffect(() => {
    localStorage.setItem("currentRowIdx", currentRowIdx);
  }, [currentRowIdx]);

  React.useEffect(() => {
    localStorage.setItem("gameStatus", gameStatus);
  }, [gameStatus]);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5 text-light">Wordlette</h1>
      <hr className="mb-5 text-light w-100" />
      <Grid
        boardState={boardState}
        setBoardState={setBoardState}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
    </Container>
  );
};

export default App;
