import React from "react";
import "./inputs.styles.scss";

export const InputPrimary = ({ input }) => {
  return (
    <input
      required
      className="input-filled"
      type={input.type}
      id={input.id}
      placeholder={input.placeholder}
      defaultValue=""
      name={input.id}
      autoComplete={input.autocomplete}
    />
  );
};
