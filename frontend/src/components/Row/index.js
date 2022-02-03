import "./index.css";
import React, { useEffect, useRef, useState } from "react";

export default function Row(props) {
  const isActive = props.isActive;
  const [currGuess, _setCurrGuess] = useState("");
  const currGuessRef = useRef(currGuess);

  const setCurrGuess = (data) => {
    currGuessRef.current = data;
    _setCurrGuess(data);
  };

  const handleKeyDown = (event) => {
    let key = event.key;
    if (key.match(/^[a-z]$/i) && currGuessRef.current.length < 5) {
      key = key.toUpperCase();
      setCurrGuess(currGuessRef.current + key);
    } else if (key === "Enter") {
    } else if (key === "Backspace") {
      setCurrGuess(currGuessRef.current.slice(0, -1));
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="row">
      <div className={"cell" + (currGuess[0] ? " filled" : "")}>
        {currGuess[0]}
      </div>
      <div className={"cell" + (currGuess[1] ? " filled" : "")}>
        {currGuess[1]}
      </div>
      <div className={"cell" + (currGuess[2] ? " filled" : "")}>
        {currGuess[2]}
      </div>
      <div className={"cell" + (currGuess[3] ? " filled" : "")}>
        {currGuess[3]}
      </div>
      <div className={"cell" + (currGuess[4] ? " filled" : "")}>
        {currGuess[4]}
      </div>
    </div>
  );
}
