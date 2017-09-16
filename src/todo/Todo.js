import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <li className="Todo">{this.props.text}</li>
    );
  }
}

export default Todo;
