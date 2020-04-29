import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
  state = {
    results: {}, // {id}: 'success' / 'error'
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    rightAnswerUI: false,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 1,
        id: 1,
        answers: [
          { text: 'Синий', id: 1 },
          { text: 'Красный', id: 2 },
          { text: 'Черный', id: 3 },
          { text: 'Фиолетовый', id: 4 },
        ],
      },
      {
        question: 'Сколько дней в феврале в 2020 году?',
        rightAnswerId: 4,
        id: 2,
        answers: [
          { text: '31', id: 1 },
          { text: '30', id: 2 },
          { text: '28', id: 3 },
          { text: '29', id: 4 },
        ],
      },
    ],
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  onAnswerClickHandler = (answerId) => {
    //если уже нажали на правильный ответ, отменяем дальнейшие клики
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key]) {
        return
      }
    }

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: {
          [answerId]: 'success',
        },
        results,
      })
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {
          [answerId]: 'error',
        },
        results,
        rightAnswerUI: true,
      })
    }

    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true,
        })
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null,
          rightAnswerUI: false,
        })
      }
      window.clearTimeout(timeout)
    }, 1000)
  }

  retryHandler = (e) => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
      rightAnswerUI: false,
    })
  }

  render() {
    return (
      <div className={classes['Quiz']}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              quizId={this.state.activeQuestion + 1}
              state={this.state.answerState}
              rightAnswerID={
                this.state.quiz[this.state.activeQuestion].rightAnswerId
              }
              rightAnswerUI={this.state.rightAnswerUI}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Quiz
