import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const ArrowForward = ({ onClick }) => {
  return (
    <ArrowForwardIcon
      className="arrow"
      color="primary"
      onClick={onClick}
    ></ArrowForwardIcon>
  );
};

export const ArrowBack = ({ onClick }) => {
  return (
    <ArrowBackIcon
      className="arrow"
      color="primary"
      onClick={onClick}
    ></ArrowBackIcon>
  );
};
