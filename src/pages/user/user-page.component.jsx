import React from "react";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebas.utils";

const UserPage = () => {
  return (
    <div>
      <h2>USER PAGE</h2>
      <CustomButton
        onClick={() => {
          auth.signOut();
        }}
      >
        SIGN OUT
      </CustomButton>
    </div>
  );
};
export default UserPage;
