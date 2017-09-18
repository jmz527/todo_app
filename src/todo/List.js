import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Todos from './Todos';
import './List.css';

class List extends Component {
  render() {
    return (
      <li className="List">

        <h2><Link to={`/list/${this.props.listId}`}>{this.props.name.toUpperCase()} | {this.props.todoCount}</Link></h2>

        <Todos listId={this.props.listId} />

      </li>
    );
  }
}

export default List;