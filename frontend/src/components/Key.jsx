import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Key = ({ inner, onClick, paddingX }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: "#818384",
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
  paddingX: PropTypes.number,
};

export default Key;
