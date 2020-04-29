import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backtrack from '../../UI/Backtrack/Backtrack'

const links = [1, 2, 3]
class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="#">Link {link}</a>
        </li>
      )
    })
  }
  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }
    return (
      <React.Fragment>
        {this.props.isOpen ? <Backtrack onClick={this.props.onClose} /> : null}
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Drawer
