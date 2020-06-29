import { Button } from "@material-ui/core";
import React from "react";

const CustomButton = ({ children }) => {
  return (
      <Button variant="outlined" color="primary">
        {children}
      </Button>
  );
};

export default CustomButton;
