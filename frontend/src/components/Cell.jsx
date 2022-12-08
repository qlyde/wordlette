import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Cell = ({ text }) => {
  return (
    <Col
      className="fw-bold d-flex justify-content-center align-items-center text-light fs-2"
      style={{ border: "2px solid rgb(58, 58, 60)" }}
    >
      {text}
    </Col>
  );
};

Cell.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Cell;
