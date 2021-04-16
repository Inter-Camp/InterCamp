import React from "react";
import { Link } from "react-router-dom";
import "./index.styles.scss";

export const TitleLinkPrimary = ({ linkUrl, text }) => {
  return (
    <Link to={linkUrl}>
      <p className="title-link-primary">{text}</p>
    </Link>
  );
};
