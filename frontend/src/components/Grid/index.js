import Row from "../Row";
import "./index.css";
import React, { useEffect, useRef, useState } from "react";

export default function Grid() {
  const storedActiveRow = localStorage.getItem("activeRow");
  const [activeRow, _setActiveRow] = useState(
    storedActiveRow ? parseInt(storedActiveRow) : 0
  );
  const activeRowRef = useRef(activeRow);

  const setActiveRow = (data) => {
    activeRowRef.current = data;
    _setActiveRow(data);
  };

  useEffect(() => {
    localStorage.setItem("activeRow", activeRow);
  }, [activeRow]);

  const onEnterCallback = () => {
    setActiveRow(activeRowRef.current + 1);
  };

  return (
    <div className="grid">
      <div>
        <Row
          rowNum={0}
          isActive={activeRow === 0}
          onEnter={onEnterCallback}
        ></Row>
        <Row
          rowNum={1}
          isActive={activeRow === 1}
          onEnter={onEnterCallback}
        ></Row>
        <Row
          rowNum={2}
          isActive={activeRow === 2}
          onEnter={onEnterCallback}
        ></Row>
        <Row
          rowNum={3}
          isActive={activeRow === 3}
          onEnter={onEnterCallback}
        ></Row>
        <Row
          rowNum={4}
          isActive={activeRow === 4}
          onEnter={onEnterCallback}
        ></Row>
        <Row
          rowNum={5}
          isActive={activeRow === 5}
          onEnter={onEnterCallback}
        ></Row>
      </div>
    </div>
  );
}
