import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = ({ children, onClick, color }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export const CustomButtonOutlined = ({ children, onClick }) => {
  return (
    <Button color="primary" variant="outlined" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
