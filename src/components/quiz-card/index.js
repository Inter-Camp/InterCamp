import {
  Button,
} from "@material-ui/core";
import React from "react";
import './quiz-card.styles.scss'

export default function QuizCard({
  id,
  title,
  imageUrl,
  linkUrl,
  description,
}) {
  return (
    <div className="quiz-card-container" id={id}>
      <div>
        <img src={imageUrl} width='50%' className='quiz-icon'/>
      </div>
      <div className='quiz-card-content'> 
      <div className='quiz-name'>
        <h2>{title}</h2>
      </div>
      <div className='quiz-desc'>{description}</div>
      <div className='btn-container'>
        <Button href={linkUrl} variant='contained' color='primary' className='btn'>Start Now</Button>
      </div>
      </div>
    </div>
  );
}
