import React from "react";
import QuizCard from "../../components/quiz-card";
import QUIZ_SECTIONS from "../../data/quiz-sections";
import "./quiz-selection-page.styles.scss";

export default function QuizSelectionPage() {
  return (
    <div className="quiz-selection-container">
      <h1>Choose What Interview You Want to Prepare for?</h1>
      {QUIZ_SECTIONS.sections.map((item) => 
      <QuizCard
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        linkUrl={item.linkUrl}
      />)}
    </div>
  );
}
