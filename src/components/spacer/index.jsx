import React from "react";
import "./spacer.styles.scss";

const Spacer = ({ children }) => {
  return (
    <div className="text-spacer">
      <span className="text-spacer-line" />
      <p>{children}</p>
      <span className="text-spacer-line" />
    </div>
  );
};

export default Spacer;
