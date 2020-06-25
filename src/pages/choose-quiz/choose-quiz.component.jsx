import React from "react";
import "./choose-quiz.styles.scss";
import QuizSection from '../../components/quiz-section/quiz-section.component';
import QUIZ_SECTIONS from '../../Quiz-sections'



function ChooseQuizPage() {
  return (
      <div className="quiz-s-preview">
        {QUIZ_SECTIONS.sections.map((item) => (
          <QuizSection key={item.id} imageUrl={item.imageUrl} />
        ))}
      </div>
  );
}

export default ChooseQuizPage;
