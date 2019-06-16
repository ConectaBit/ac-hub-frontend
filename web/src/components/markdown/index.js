import React, { useState } from "react";
import Editor from "for-editor-translated";

function Markdown() {
  const [value, setValue] = useState("");

  function handleChange(value) {
      setValue(value)
  }
  return <Editor value={value} onChange={handleChange} />
}

export default Markdown;
