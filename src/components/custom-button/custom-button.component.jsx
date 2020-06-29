import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = ({ children, onClick, color }) => {
  return (
    <Button 
    variant="contained" 
    color={color}
    onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
