import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

const FBIcon = ({ link, fs }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FacebookIcon focusable="true" fontSize={fs} />
    </a>
  );
};

export default FBIcon;
