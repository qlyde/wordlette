import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Row from "./Row";

const Grid = ({
  boardState,
  setBoardState,
  currentRowIdx,
  setCurrentRowIdx,
  gameStatus,
  setGameStatus,
  answer,
}) => {
  return (
    <Container className="mt-5" style={{ width: "330px" }}>
      <Row
        idx={0}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        boardState={boardState}
        setBoardState={setBoardState}
      />
      <Row
        idx={1}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        boardState={boardState}
        setBoardState={setBoardState}
      />
      <Row
        idx={2}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        boardState={boardState}
        setBoardState={setBoardState}
      />
      <Row
        idx={3}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        boardState={boardState}
        setBoardState={setBoardState}
      />
      <Row
        idx={4}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        boardState={boardState}
        setBoardState={setBoardState}
      />
      <Row
        idx={5}
        currentRowIdx={currentRowIdx}
        setCurrentRowIdx={setCurrentRowIdx}
        boardState={boardState}
        setBoardState={setBoardState}
      />
    </Container>
  );
};

Grid.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBoardState: PropTypes.func.isRequired,
  currentRowIdx: PropTypes.number.isRequired,
  setCurrentRowIdx: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  setGameStatus: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Grid;
