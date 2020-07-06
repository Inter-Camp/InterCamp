import React from "react";
import "./user-page.styles.scss";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebas.utils";
import QuestionPreview from "../../components/question-preview/question-preview.component";
import { connect } from "react-redux";
import { BackToAllButton } from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";

const UserPage = ({ favQuestions }) => {
  const id = "favorite";
  const addToFav = false;
  console.log(favQuestions);
  return (
    <div className="user-page">
      <div className="nav-container">
        <Link to={"/quiz"}>
          <BackToAllButton />
        </Link>
        <CustomButton
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </CustomButton>
      </div>
      <div className="favorite-container">
        <h2>Favorite questions</h2>
        {favQuestions.questions.length ? (
          <QuestionPreview quizId={id} addToFav={addToFav} />
        ) : (
          <p>No Favorite Questions Yet</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { favQuestions: state.quiz.questions.favorite };
};
export default connect(mapStateToProps)(UserPage);
