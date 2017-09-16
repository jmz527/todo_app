import React, { Component } from 'react';
import Todos from './Todos';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <h2>{this.props.name.toUpperCase()} | {this.props.todoCount}</h2>

        <Todos listId={this.props.listId} />

      </div>
    );
  }
}

export default List;
