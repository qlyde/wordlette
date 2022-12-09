import React from "react";
import { Row as BSRow } from "react-bootstrap";
import PropTypes from "prop-types";

import Cell from "./Cell";

const Row = ({ idx, boardState }) => {
  return (
    <BSRow style={{ height: "62px", marginBottom: "5px", gap: "5px" }}>
      <Cell text={boardState[idx][0] ?? ""} />
      <Cell text={boardState[idx][1] ?? ""} />
      <Cell text={boardState[idx][2] ?? ""} />
      <Cell text={boardState[idx][3] ?? ""} />
      <Cell text={boardState[idx][4] ?? ""} />
    </BSRow>
  );
};

Row.propTypes = {
  idx: PropTypes.number.isRequired,
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Row;
