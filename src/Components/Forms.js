import React from "react";

function Forms(props) {
  return (
    <div class="mb-3">
      <label for={props.classCorreo} class="form-label">
        {props.nombre}
      </label>
      <input
        for={props.for}
        required
        type={props.type}
        className="form-control"
        id={props.id}
        aria-describedby="emailHelp"
        value={props.value}
        onChange={props.onchange}
        onKeyUp={props.onchange}
      />
    </div>
  );
}

export default Forms;
