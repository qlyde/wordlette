import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";
import { BsShare } from "react-icons/bs";
import { ToastContainer, toast, Flip } from "react-toastify";

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
  const [modalShow, setModalShow] = React.useState(true);

  React.useEffect(() => {
    const savedBoardState = boardState.map((word, idx) =>
      word.length === 5 && idx < currentRowIdx ? word : ""
    );
    localStorage.setItem("boardState", JSON.stringify(savedBoardState));
  }, [boardState]);

  React.useEffect(() => {
    localStorage.setItem("currentRowIdx", currentRowIdx);
    if (currentRowIdx === 6) {
      setGameStatus("COMPLETE");
    }
  }, [currentRowIdx]);

  React.useEffect(() => {
    localStorage.setItem("gameStatus", gameStatus);
  }, [gameStatus]);

  const handleClose = () => setModalShow(false);

  return (
    <>
      <ToastContainer
        toastStyle={{
          top: "60px",
          marginBottom: "5px",
          color: "black",
          fontSize: "11pt",
          fontWeight: "bold",
          minHeight: 0,
        }}
        bodyStyle={{
          padding: "0px",
          textAlign: "center",
          marginTop: 0,
          marginBottom: 0,
        }}
        style={{ width: "250px" }}
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        closeButton={false}
        pauseOnHover
        draggable
        transition={Flip}
      />

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

      <Modal
        centered
        show={gameStatus === "COMPLETE" && modalShow}
        onHide={handleClose}
      >
        <Modal.Body
          className="text-light text-center"
          style={{
            backgroundColor: "#222222",
            borderRadius: "5px",
          }}
        >
          <div
            className="fw-bold mb-2"
            style={{ fontSize: "10pt", textTransform: "uppercase" }}
          >
            Next Wordlette in 21:53:32
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="d-flex align-items-center gap-3 px-5 py-2 fw-bold"
              style={{
                backgroundColor: "#538d4e",
                borderRadius: "50px",
                border: "none",
              }}
              onClick={() => {
                navigator.clipboard.writeText(`Wordlette ${
                  boardState.filter((word) => word !== "").length
                }/6
${boardState
  .map((word) => {
    if (word) {
      const status = [];
      let solution = answer;

      // check for correct cells first
      for (let i = 0; i < 5; i++) {
        if (solution[i] === word[i]) {
          status[i] = "🟩";
          solution = solution.replace(word[i], ".");
        }
      }

      // then check for other cells
      for (let i = 0; i < 5; i++) {
        if (status[i] === "🟩") {
          continue;
        }

        if (solution.includes(word[i])) {
          status[i] = "🟨";
          solution = solution.replace(word[i], ".");
        } else {
          status[i] = "⬜";
        }
      }

      return status.join("");
    }

    return "";
  })
  .filter((line) => line !== "")
  .join("\n")}`);
                toast("Copied results to clipboard");
              }}
            >
              Share <BsShare strokeWidth={0.6} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default App;
