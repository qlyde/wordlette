import Row from "../Row";
import "./index.css";
import React, { useState } from "react";

export default function Grid() {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <div className="grid">
      <div>
        <Row isActive={activeRow === 0}></Row>
        <Row isActive={activeRow === 1}></Row>
        <Row isActive={activeRow === 2}></Row>
        <Row isActive={activeRow === 3}></Row>
        <Row isActive={activeRow === 4}></Row>
        <Row isActive={activeRow === 5}></Row>
      </div>
    </div>
  );
}
