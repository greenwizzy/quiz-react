import React from 'react'
import classes from './ActiveQuiz.module.css'
import ListQuiz from '../ListQuiz/ListQuiz'

const ActiveQuiz = (props) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.quizId}.</strong>&nbsp;
        {props.question}
      </span>
      <small>
        {props.quizId} из {props.quizLength}
      </small>
    </p>

    <ListQuiz
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
)

export default ActiveQuiz
