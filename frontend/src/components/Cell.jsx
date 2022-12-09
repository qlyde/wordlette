import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

// "EMPTY", "PENDING", "CORRECT", "MISPLACED", "INCORRECT"

const Cell = ({ text, status }) => {
  return (
    <Col
      className="fw-bold d-flex justify-content-center align-items-center text-light fs-2"
      style={{
        border:
          status === "EMPTY"
            ? "2px solid rgb(58, 58, 60)"
            : status === "PENDING"
            ? "2px solid rgb(86, 87, 88)"
            : "none",
        backgroundColor:
          status === "EMPTY" || status === "PENDING"
            ? "transparent"
            : status === "CORRECT"
            ? "rgb(83,141,78)"
            : status === "MISPLACED"
            ? "rgb(181,159,59)"
            : "rgb(58,58,60)",
      }}
    >
      {text}
    </Col>
  );
};

Cell.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Cell;
