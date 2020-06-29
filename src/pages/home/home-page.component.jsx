import React from "react";
import "./home-page.styles.scss";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link className="go-to-quiz" to="/quiz">
        <CustomButton>Go To Quiz</CustomButton>
      </Link>
    </div>
  );
};

export default HomePage;
