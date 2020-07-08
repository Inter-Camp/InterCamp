import React from "react";
import "./user-page.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebas.utils";

import {
  CustomButton,
  BackToAllButton,
} from "../../components/custom-button/custom-button.component";

const UserPage = ({ favQuestions }) => {
  console.log(favQuestions);
  return (
    <div className="user-page">
      <div className="nav-container">
        <BackToAllButton />
        <Link className="link-to-all" to={"/favorite"}>
          <CustomButton color="primary">Go To Favorite</CustomButton>
        </Link>
        <CustomButton
          color="primary"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </CustomButton>
      </div>
    </div>
  );
};

export default UserPage;
