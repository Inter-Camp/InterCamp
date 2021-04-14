import React from "react";
import { InputPrimary } from "../inputs";
import { ButtonPrimary } from "../buttons";

const Form = ({ data, onSubmit }) => {
  return (
    <form
      key="form"
      className="form-sign-up"
      validate="true"
      onSubmit={onSubmit}
    >
      {data.inputFields.map((input) => (
        <InputPrimary key={input.id} input={input} />
      ))}
      <ButtonPrimary type="submit">{data.submitLabel}</ButtonPrimary>
    </form>
  );
};

export default Form;
