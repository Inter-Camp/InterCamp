import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

const TTIcon = ({ link, fs }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <TwitterIcon focusable="true" fontSize={fs} />
    </a>
  );
};

export default TTIcon;
