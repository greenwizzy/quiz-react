import React from 'react'
import classes from './ListQuiz.module.css'
import ListItem from '../ListItem/ListItem'

const ListQuiz = (props) => {
  return (
    <ul className={classes.ListQuiz}>
      {props.answers.map((answer, index) => {
        return (
          <ListItem
            answer={answer}
            key={index}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
            rightAnswerID={props.rightAnswerID}
            rightAnswerUI={props.rightAnswerUI}
          />
        )
      })}
    </ul>
  )
}
export default ListQuiz
