import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import { fetchQuizes } from '../../redux/actions/quiz'
import { connect } from 'react-redux'

class QuizList extends Component {
  renderQuizes() {
    return this.props.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes()
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1> Список тестов</h1>
          {!this.props.loading && this.props.quizes.length ? (
            <ul>{this.renderQuizes()}</ul>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.quiz.loading,
    quizes: state.quiz.quizes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
