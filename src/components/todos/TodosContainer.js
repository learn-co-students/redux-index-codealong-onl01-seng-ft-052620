import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo.js'

class TodosContainer extends Component {

  render() {
    return(
      <div>
        <ul>
          {this.props.todos.map((todo, id) => (
            <Todo key={id} text={todo}/>
          ))}
        </ul>
      </div>
    );
  }
};

export default connect(state => ({ todos: state.todos }))(TodosContainer);