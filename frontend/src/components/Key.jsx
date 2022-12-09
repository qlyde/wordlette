import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Key = ({ inner, onClick, status, paddingX }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor:
          status === "PENDING" || status === undefined
            ? "#818384"
            : status === "INCORRECT"
            ? "rgb(58,58,60)"
            : status === "CORRECT"
            ? "rgb(83,141,78)"
            : "rgb(181,159,59)",
        border: "none",
        height: "58px",
        minWidth: "43px",
        paddingLeft: paddingX ? paddingX + "px" : "15px",
        paddingRight: paddingX ? paddingX + "px" : "15px",
        fontSize: "10pt",
        fontWeight: "bold",
        borderRadius: "5px",
      }}
    >
      {inner}
    </Button>
  );
};

Key.propTypes = {
  inner: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  paddingX: PropTypes.number,
};

export default Key;
