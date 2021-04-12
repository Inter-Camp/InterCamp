import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";

const IGIcon = ({ link, fs }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <InstagramIcon focusable="true" fontSize={fs} />
    </a>
  );
};

export default IGIcon;
