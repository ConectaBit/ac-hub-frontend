import React from "react";

function AddButton(props) {
  return <div onMouseDown={props.handleMouseDown}>{props.label}</div>;
}

export default AddButton;
