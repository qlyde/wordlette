import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Row from "./Row";

const Grid = ({ boardState }) => {
  return (
    <Container className="my-auto" style={{ width: "330px" }}>
      <Row idx={0} boardState={boardState} />
      <Row idx={1} boardState={boardState} />
      <Row idx={2} boardState={boardState} />
      <Row idx={3} boardState={boardState} />
      <Row idx={4} boardState={boardState} />
      <Row idx={5} boardState={boardState} />
    </Container>
  );
};

Grid.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Grid;
