import React, { Component } from 'react';
import './Todos.css';

class Todos extends Component {
  render() {
    return (
      <div className="Todos">
        <div className="Todos-header">
          <h2>TODOS</h2>
        </div>
        <p className="Todos-intro">Todos stuff here</p>
      </div>
    );
  }
}

export default Todos;
