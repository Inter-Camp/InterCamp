import React from "react";
import "./home-page.styles.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link className="go-to-quiz" to="/quiz">
        <Button variant="outlined" color="primary">
          Go To Quiz
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
