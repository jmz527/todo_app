import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <li className="Todo">
      	<Link to={`/todo/${this.props.todoId}`}>{this.props.text}</Link>
      </li>
    );
  }
}

export default Todo;