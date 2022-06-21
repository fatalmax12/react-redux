import React from "react";

function InputField(props) {
  return (
    <label>
      <input value={props.title} onChange={(e) => props.handleInput(e.target.value)} />
      <button onClick={props.handleSubmit}>Add Todo</button>
    </label>
  );
}

export default InputField;
