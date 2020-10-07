import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  displayTodos = () => {
    return this.props.todos.map((todo, index) => (
      <Todo id={index} todo={todo} />
    ));
  };

  render() {
    return <div>{this.displayTodos()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodosContainer);
