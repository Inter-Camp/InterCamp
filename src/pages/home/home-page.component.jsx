import React from "react";
import "./home-page.styles.scss";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Button } from "@material-ui/core";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link className="go-to-quiz" to="/quiz">
        <CustomButton>Go To Quiz</CustomButton>
      </Link>
      <Link className="option" to="/quiz">
        <Button color="primary" variant="outlined">
          CONTINUE AS GUEST
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
