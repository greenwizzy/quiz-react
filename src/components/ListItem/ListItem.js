import React from 'react'
import classes from './ListItem.module.css'

const ListItem = (props) => {
  const cls = [classes.ListItem]
  if (props.state) {
    cls.push(classes[props.state])
  }
  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default ListItem
