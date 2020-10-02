import React, { Component } from 'react'
import { Todo } from './Todo'

import { connect } from 'react-redux'

export class TodosContainer extends Component {

  genTodos = () => {
    return this.props.todos.map( (todo,i) => (
      <Todo key={i} text={todo} />
    ))
  }

  render() {
    return (
      <div>
        {this.genTodos()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(TodosContainer)
