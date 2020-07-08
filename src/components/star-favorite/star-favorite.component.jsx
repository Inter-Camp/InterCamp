import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  OutlinedStarIcon,
  FilledStarIcon,
} from "../icons/favorite-icons.component";

const StarFavorite = ({ favQuestions }) => {
  //   const { favQuestions } = this.props;
  return (
      <Link to={"/favorite"}>
    <div>
      {favQuestions.questions.length ? (
        <FilledStarIcon />
      ) : (
        <OutlinedStarIcon />
      )}
    </div>
      </Link>
  );
};

const mapStateToProps = (state) => {
  return { favQuestions: state.quiz.questions.favorite };
};

export default connect(mapStateToProps)(StarFavorite);
