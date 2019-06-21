import React from "react";

function MenuButton(props) {
  return <div onMouseDown={props.handleMouseDown}>{props.label}</div>;
}

export default MenuButton;
