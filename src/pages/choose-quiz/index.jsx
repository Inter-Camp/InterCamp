import React from "react";
import "./choose-quiz.styles.scss";
import QuizSection from "../../components/quiz-section/quiz-section.component";
import QUIZ_SECTIONS from "../../data/quiz-sections";

const ChooseQuizPage = ({ match }) => {
  return (
    <div className="quiz-s-preview">
      {QUIZ_SECTIONS.sections.map((item) => (
        <QuizSection
          key={item.id}
          imageUrl={item.imageUrl}
          linkUrl={item.linkUrl}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ChooseQuizPage;
