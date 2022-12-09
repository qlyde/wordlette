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

  return (
    <div className="d-flex flex-column align-items-center gap-2 mb-2">
      <div className="d-flex" style={{ gap: "6px" }}>
        <Key inner="Q" onClick={() => onKeyClick("Q")} />
        <Key inner="W" onClick={() => onKeyClick("W")} />
        <Key inner="E" onClick={() => onKeyClick("E")} />
        <Key inner="R" onClick={() => onKeyClick("R")} />
        <Key inner="T" onClick={() => onKeyClick("T")} />
        <Key inner="Y" onClick={() => onKeyClick("Y")} />
        <Key inner="U" onClick={() => onKeyClick("U")} />
        <Key inner="I" onClick={() => onKeyClick("I")} />
        <Key inner="O" onClick={() => onKeyClick("O")} />
        <Key inner="P" onClick={() => onKeyClick("P")} />
      </div>
      <div className="d-flex" style={{ gap: "6px" }}>
        <Key inner="A" onClick={() => onKeyClick("A")} />
        <Key inner="S" onClick={() => onKeyClick("S")} />
        <Key inner="D" onClick={() => onKeyClick("D")} />
        <Key inner="F" onClick={() => onKeyClick("F")} />
        <Key inner="G" onClick={() => onKeyClick("G")} />
        <Key inner="H" onClick={() => onKeyClick("H")} />
        <Key inner="J" onClick={() => onKeyClick("J")} />
        <Key inner="K" onClick={() => onKeyClick("K")} />
        <Key inner="L" onClick={() => onKeyClick("L")} />
      </div>
      <div className="d-flex" style={{ gap: "6px" }}>
        <Key inner="ENTER" onClick={onEnterClick} paddingX={11} />
        <Key inner="Z" onClick={() => onKeyClick("Z")} />
        <Key inner="X" onClick={() => onKeyClick("X")} />
        <Key inner="C" onClick={() => onKeyClick("C")} />
        <Key inner="V" onClick={() => onKeyClick("V")} />
        <Key inner="B" onClick={() => onKeyClick("B")} />
        <Key inner="N" onClick={() => onKeyClick("N")} />
        <Key inner="M" onClick={() => onKeyClick("M")} />
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
