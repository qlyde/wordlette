import "./index.css";
import React, { useEffect, useRef, useState } from "react";

export default function Row(props) {
  const isActive = props.isActive;
  const [currGuess, _setCurrGuess] = useState("");
  const currGuessRef = useRef(currGuess);
  const [activeCell, _setActiveCell] = useState(0);
  const activeCellRef = useRef(activeCell);
  const [cellStates, _setCellStates] = useState([
    "cell",
    "cell",
    "cell",
    "cell",
    "cell",
  ]);
  const cellStatesRef = useRef(cellStates);

  const setCurrGuess = (data) => {
    currGuessRef.current = data;
    _setCurrGuess(data);
  };

  const setActiveCell = (data) => {
    activeCellRef.current = data;
    _setActiveCell(data);
  };

  const setCellStates = (data) => {
    cellStates.current = data;
    _setCellStates(data);
  };

  const modifyCellState = (cell, newState) => {
    let newCellStates = cellStatesRef.current;
    newCellStates[cell] = newState;
    setCellStates(newCellStates);
  };

  const handleKeyDown = (event) => {
    let key = event.key;
    if (key.match(/^[a-z]$/i) && currGuessRef.current.length < 5) {
      key = key.toUpperCase();
      setCurrGuess(currGuessRef.current + key);
      modifyCellState(activeCellRef.current, "cell filled");
      setActiveCell(activeCellRef.current + 1);
    } else if (key === "Enter") {
      if (currGuessRef.current.length === 5) {
        let solution = JSON.parse(localStorage.gameState)[
          "solution"
        ].toUpperCase();
        let incorrectGuesses = solution;

        // check for correct cells first
        for (let i = 0; i < 5; i++) {
          if (solution[i] === currGuessRef.current[i]) {
            modifyCellState(i, "cell correct");
            incorrectGuesses = incorrectGuesses.replace(
              currGuessRef.current[i],
              ""
            );
          }
        }

        // then check for other cells
        for (let i = 0; i < 5; i++) {
          if (cellStatesRef.current[i] === "cell correct") {
            continue;
          }

          if (incorrectGuesses.includes(currGuessRef.current[i])) {
            modifyCellState(i, "cell present");
            incorrectGuesses = incorrectGuesses.replace(
              currGuessRef.current[i],
              ""
            );
          } else {
            modifyCellState(i, "cell absent");
          }
        }

        props.onEnter();
      }
    } else if (key === "Backspace") {
      setCurrGuess(currGuessRef.current.slice(0, -1));
      if (activeCellRef.current !== 0) {
        modifyCellState(activeCellRef.current - 1, "cell");
        setActiveCell(activeCellRef.current - 1);
      }
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="row">
      <div className={cellStates[0]}>{currGuess[0]}</div>
      <div className={cellStates[1]}>{currGuess[1]}</div>
      <div className={cellStates[2]}>{currGuess[2]}</div>
      <div className={cellStates[3]}>{currGuess[3]}</div>
      <div className={cellStates[4]}>{currGuess[4]}</div>
    </div>
  );
}
