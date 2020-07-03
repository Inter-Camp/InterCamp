import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { orange } from '@material-ui/core/colors';

export const AccountIcon = ({ onClick }) => {
  return <AccountCircleIcon onClick={onClick} style={{ fontSize: 30, cursor: "pointer", color: orange[700] }} />;
};
