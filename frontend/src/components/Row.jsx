import React from "react";
import { Row as BSRow } from "react-bootstrap";
import PropTypes from "prop-types";

import Cell from "./Cell";

const Row = ({ idx, boardState, currentRowIdx, answer }) => {
  const getStatus = () => {
    // "EMPTY", "PENDING", "CORRECT", "MISPLACED", "INCORRECT"
    if (idx >= currentRowIdx) {
      return [0, 1, 2, 3, 4].map((cellIdx) =>
        boardState[idx][cellIdx] ? "PENDING" : "EMPTY"
      );
    }

    const status = [];
    let solution = answer;
    const submittedWord = boardState[idx];

    // check for correct cells first
    for (let i = 0; i < 5; i++) {
      if (solution[i] === submittedWord[i]) {
        status[i] = "CORRECT";
        solution = solution.replace(submittedWord[i], ".");
      }
    }

    // then check for other cells
    for (let i = 0; i < 5; i++) {
      if (status[i] === "CORRECT") {
        continue;
      }

      if (solution.includes(submittedWord[i])) {
        status[i] = "MISPLACED";
        solution = solution.replace(submittedWord[i], ".");
      } else {
        status[i] = "INCORRECT";
      }
    }

    return status;
  };

  return (
    <BSRow style={{ height: "62px", marginBottom: "5px", gap: "5px" }}>
      <Cell text={boardState[idx][0] ?? ""} status={getStatus()[0]} />
      <Cell text={boardState[idx][1] ?? ""} status={getStatus()[1]} />
      <Cell text={boardState[idx][2] ?? ""} status={getStatus()[2]} />
      <Cell text={boardState[idx][3] ?? ""} status={getStatus()[3]} />
      <Cell text={boardState[idx][4] ?? ""} status={getStatus()[4]} />
    </BSRow>
  );
};

Row.propTypes = {
  idx: PropTypes.number.isRequired,
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRowIdx: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Row;
