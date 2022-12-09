import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Row from "./Row";

const Grid = ({ boardState, currentRowIdx, answer }) => {
  return (
    <Container className="my-auto" style={{ width: "330px" }}>
      <Row
        idx={0}
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
      <Row
        idx={1}
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
      <Row
        idx={2}
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
      <Row
        idx={3}
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
      <Row
        idx={4}
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
      <Row
        idx={5}
        boardState={boardState}
        currentRowIdx={currentRowIdx}
        answer={answer}
      />
    </Container>
  );
};

Grid.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRowIdx: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Grid;
