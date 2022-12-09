import React from "react";
import PropTypes from "prop-types";
import { BsBackspace } from "react-icons/bs";

import Key from "./Key";

const Keyboard = ({
  boardState,
  setBoardState,
  currentRowIdx,
  setCurrentRowIdx,
  gameStatus,
  setGameStatus,
  answer,
}) => {
  const onKeyClick = (key) => {
    const currentWord = boardState[currentRowIdx];
    if (currentWord.length < 5) {
      setBoardState((curr) =>
        curr.map((word, idx) =>
          idx === currentRowIdx ? currentWord + key : word
        )
      );
    }
  };

  const onEnterClick = () => {
    const currentWord = boardState[currentRowIdx];
    if (currentWord.length === 5) {
      // TODO: check if valid word
      setBoardState((curr) =>
        curr.map((word, idx) => (idx === currentRowIdx ? currentWord : word))
      );
      setCurrentRowIdx((curr) => curr + 1);
    }
  };

  const onBackspaceClick = () => {
    const currentWord = boardState[currentRowIdx];
    if (currentWord.length > 0) {
      setBoardState((curr) =>
        curr.map((word, idx) =>
          idx === currentRowIdx ? currentWord.slice(0, -1) : word
        )
      );
    }
  };

  const getStatus = (key) => {
    // "PENDING", "CORRECT", "MISPLACED", "INCORRECT"
    let isSubmitted = false;
    const submittedPositions = [];

    for (let i = 0; i < 5; i++) {
      const submittedWord = boardState[i];
      if (
        submittedWord.includes(key) &&
        submittedWord.length === 5 &&
        i < currentRowIdx
      ) {
        isSubmitted = true;
        let index = submittedWord.indexOf(key);
        while (index > -1) {
          submittedPositions.push(index);
          index = submittedWord.indexOf(key, index + 1);
        }
      }
    }

    if (isSubmitted) {
      for (const idx of submittedPositions) {
        if (answer[idx] === key) {
          return "CORRECT";
        }
      }

      if (answer.includes(key)) {
        return "MISPLACED";
      }

      return "INCORRECT";
    }

    return "PENDING";
  };

  return (
    <div className="d-flex flex-column align-items-center gap-2 mb-2">
      <div className="d-flex" style={{ gap: "6px" }}>
        <Key
          inner="Q"
          onClick={() => onKeyClick("Q")}
          status={getStatus("Q")}
        />
        <Key
          inner="W"
          onClick={() => onKeyClick("W")}
          status={getStatus("W")}
        />
        <Key
          inner="E"
          onClick={() => onKeyClick("E")}
          status={getStatus("E")}
        />
        <Key
          inner="R"
          onClick={() => onKeyClick("R")}
          status={getStatus("R")}
        />
        <Key
          inner="T"
          onClick={() => onKeyClick("T")}
          status={getStatus("T")}
        />
        <Key
          inner="Y"
          onClick={() => onKeyClick("Y")}
          status={getStatus("Y")}
        />
        <Key
          inner="U"
          onClick={() => onKeyClick("U")}
          status={getStatus("U")}
        />
        <Key
          inner="I"
          onClick={() => onKeyClick("I")}
          status={getStatus("I")}
        />
        <Key
          inner="O"
          onClick={() => onKeyClick("O")}
          status={getStatus("O")}
        />
        <Key
          inner="P"
          onClick={() => onKeyClick("P")}
          status={getStatus("P")}
        />
      </div>
      <div className="d-flex" style={{ gap: "6px" }}>
        <Key
          inner="A"
          onClick={() => onKeyClick("A")}
          status={getStatus("A")}
        />
        <Key
          inner="S"
          onClick={() => onKeyClick("S")}
          status={getStatus("S")}
        />
        <Key
          inner="D"
          onClick={() => onKeyClick("D")}
          status={getStatus("D")}
        />
        <Key
          inner="F"
          onClick={() => onKeyClick("F")}
          status={getStatus("F")}
        />
        <Key
          inner="G"
          onClick={() => onKeyClick("G")}
          status={getStatus("G")}
        />
        <Key
          inner="H"
          onClick={() => onKeyClick("H")}
          status={getStatus("H")}
        />
        <Key
          inner="J"
          onClick={() => onKeyClick("J")}
          status={getStatus("J")}
        />
        <Key
          inner="K"
          onClick={() => onKeyClick("K")}
          status={getStatus("K")}
        />
        <Key
          inner="L"
          onClick={() => onKeyClick("L")}
          status={getStatus("L")}
        />
      </div>
      <div className="d-flex" style={{ gap: "6px" }}>
        <Key inner="ENTER" onClick={onEnterClick} paddingX={11} />
        <Key
          inner="Z"
          onClick={() => onKeyClick("Z")}
          status={getStatus("Z")}
        />
        <Key
          inner="X"
          onClick={() => onKeyClick("X")}
          status={getStatus("X")}
        />
        <Key
          inner="C"
          onClick={() => onKeyClick("C")}
          status={getStatus("C")}
        />
        <Key
          inner="V"
          onClick={() => onKeyClick("V")}
          status={getStatus("V")}
        />
        <Key
          inner="B"
          onClick={() => onKeyClick("B")}
          status={getStatus("B")}
        />
        <Key
          inner="N"
          onClick={() => onKeyClick("N")}
          status={getStatus("N")}
        />
        <Key
          inner="M"
          onClick={() => onKeyClick("M")}
          status={getStatus("M")}
        />
        <Key
          inner={<BsBackspace size={20} strokeWidth={0.4} />}
          onClick={onBackspaceClick}
          paddingX={22}
        />
      </div>
    </div>
  );
};

Keyboard.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBoardState: PropTypes.func.isRequired,
  currentRowIdx: PropTypes.number.isRequired,
  setCurrentRowIdx: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  setGameStatus: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Keyboard;
