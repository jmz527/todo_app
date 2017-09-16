import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <div className="Todo-header">
          <h2>TODO</h2>
        </div>
        <p className="Todo-intro">Todo stuff here</p>
      </div>
    );
  }
}

export default Todo;
