import Row from "../Row";
import "./index.css";
import React, { useRef, useState } from "react";

export default function Grid() {
  const [activeRow, _setActiveRow] = useState(0);
  const activeRowRef = useRef(activeRow);

  const setActiveRow = (data) => {
    activeRowRef.current = data;
    _setActiveRow(data);
  };

  const onEnterCallback = () => {
    setActiveRow(activeRowRef.current + 1);
  };

  return (
    <div className="grid">
      <div>
        <Row isActive={activeRow === 0} onEnter={onEnterCallback}></Row>
        <Row isActive={activeRow === 1} onEnter={onEnterCallback}></Row>
        <Row isActive={activeRow === 2} onEnter={onEnterCallback}></Row>
        <Row isActive={activeRow === 3} onEnter={onEnterCallback}></Row>
        <Row isActive={activeRow === 4} onEnter={onEnterCallback}></Row>
        <Row isActive={activeRow === 5} onEnter={onEnterCallback}></Row>
      </div>
    </div>
  );
}
