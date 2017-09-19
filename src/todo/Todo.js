import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Todo.css';

class Todo extends Component {
  render() {
  	var title

    if (this.props.linked) {
      title = (<Link to={`/todo/${this.props.todoId}`}>{this.props.text}</Link>)
    } else {
      title = (<span>{this.props.text}</span>)
    }

    return (
      <li className="Todo">
      	{title}
      </li>
    );
  }
}

export default Todo;