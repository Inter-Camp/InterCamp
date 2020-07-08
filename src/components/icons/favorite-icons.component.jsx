import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";

export const OutlinedStarIcon = () => {
  return (
    <StarBorderIcon
      color="primary"
      style={{ fontSize: 30, cursor: "pointer", color: yellow[700] }}
    />
  );
};

export const FilledStarIcon = () => {
  return (
    <StarIcon
      color="primary"
      style={{ fontSize: 30, cursor: "pointer", color: yellow[700] }}
    />
  );
};
