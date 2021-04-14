import React from "react";
import "./inputs.styles.scss";

export const InputPrimary = ({ input, children }) => {
  return (
    <input
      className="input-filled"
      type={input.type}
      id={input.id}
      placeholder={input.placeholder}
      name={input.id}
      autoComplete={input.autocomplete}
    >
      {children}
    </input>
  );
};
