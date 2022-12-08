import React from "react";
import { Col, Row as BSRow } from "react-bootstrap";
import PropTypes from "prop-types";

import Cell from "./Cell";

const Row = ({
  idx,
  currentRowIdx,
  setCurrentRowIdx,
  boardState,
  setBoardState,
}) => {
  const [rowWord, setRowWord] = React.useState(boardState[idx]);
  const [keysDown, setKeysDown] = React.useState({});

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const keyUpper = event.key.toUpperCase();
      if (
        keyUpper === "CONTROL" ||
        keyUpper === "BACKSPACE" ||
        keyUpper === "ENTER" ||
        (keyUpper.length === 1 && keyUpper >= "A" && keyUpper <= "Z")
      ) {
        console.log(keyUpper + event.type);
        setKeysDown({
          ...keysDown,
          [keyUpper]: event.type === "keydown",
        });
      }
    };

    const handleKeyUp = handleKeyDown;

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  React.useEffect(() => {
    console.log(keysDown);

    if (keysDown["CONTROL"] !== true) {
      Object.entries(keysDown).forEach(([key, keyDown]) => {
        // check if this row is active
        if (idx === currentRowIdx) {
          // check if letter/backspace/enter is pressed
          if (key.length === 1 && keyDown) {
            // check if 5 letters already entered
            if (rowWord.length < 5) {
              setRowWord((curr) => curr + key);
            }
          } else if (key === "BACKSPACE" && keyDown) {
            // check if length is more than 0
            if (rowWord.length > 0) {
              setRowWord((curr) => curr.slice(0, -1));
            }
          } else if (key === "ENTER" && keyDown) {
            // check if length is 5
            // TODO: check if valid word
            if (rowWord.length === 5) {
              setBoardState((curr) =>
                curr.map((word, i) => (i === idx ? rowWord : word))
              );

              setCurrentRowIdx((curr) => curr + 1);
            }
          }
        }
      });
    }
  }, [keysDown]);

  return (
    <BSRow style={{ height: "62px", marginBottom: "5px", gap: "5px" }}>
      <Cell text={rowWord[0] ?? ""} />
      <Cell text={rowWord[1] ?? ""} />
      <Cell text={rowWord[2] ?? ""} />
      <Cell text={rowWord[3] ?? ""} />
      <Cell text={rowWord[4] ?? ""} />
    </BSRow>
  );
};

Row.propTypes = {
  idx: PropTypes.number.isRequired,
  currentRowIdx: PropTypes.number.isRequired,
  setCurrentRowIdx: PropTypes.func.isRequired,
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBoardState: PropTypes.func.isRequired,
};

export default Row;
